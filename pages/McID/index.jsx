import React, { useState, useEffect, useCallback } from "react";
import { List, Card, Typography, Input, Select, message } from "antd";
import axios from "axios";
import Layout from "@theme/Layout";

const { Paragraph } = Typography;
const { Search } = Input;

export default function McIDPage() {
  const [mIsLoading, set_mIsLoading] = useState(false); // 是否正在加载

  const [mVersionList, set_mVersionList] = useState([]); // 版本列表数据
  const [mItemList, set_mItemList] = useState([]); // 物品列表数据

  const [mSearchInputData, set_mSearchInputData] = useState(""); // 搜索框输入数据
  const [mSelectedClass, set_mSelectedClass] = useState("all"); // 选择的分类
  const [mSelectedVersion, set_mSelectedVersion] = useState(""); // 选择的版本

  const [mInputSelectedKey, set_mInputSelectedKey] = useState("name"); // 输入框选中的key

  const [mFilterShowData, set_mFilterShowData] = useState([]); // 过滤后的展示数据

  const fetchItemData = useCallback(async () => {
    set_mIsLoading(true);
    if (mVersionList.length === 0) {
      const verData = await axios(
        "https://api.github.com/repos/engsr6982/Minecraft-ItemList/tags"
      );
      if (verData.status !== 200) return message.error("获取版本列表失败！");
      set_mVersionList(verData.data.map((item) => item.name)); // 获取版本列表
      set_mSelectedVersion(verData.data[0].name); // 默认选择第一个版本
    }
    if (mSelectedVersion === "") return message.error("请选择版本！");
    const itData = await axios(
      `https://raw.githubusercontent.com/engsr6982/Minecraft-ItemList/${
        mSelectedVersion === "default" ? mVersionList[0] : mSelectedVersion
      }/Item.json`
    );
    if (itData.status !== 200) return message.error("获取物品列表失败！");
    set_mItemList(itData.data);
    set_mIsLoading(false);
  }, [mSelectedVersion, mVersionList]);
  useEffect(() => {
    fetchItemData();
  }, [fetchItemData]);

  useEffect(() => {
    set_mIsLoading(true);
    let results = mItemList;
    if (mSearchInputData !== "") {
      results = results.filter(
        (it) =>
          mInputSelectedKey !== "id"
            ? it[mInputSelectedKey] // 名称或命名空间
                .toLowerCase()
                .includes(mSearchInputData.toLowerCase())
            : it[mInputSelectedKey] === parseInt(mSearchInputData) // ID
      );
    }
    if (mSelectedClass !== "all") {
      results = results.filter((item) => item.class === mSelectedClass); // 分类过滤
    }
    set_mFilterShowData(results);
    set_mIsLoading(false);
  }, [mSearchInputData, mInputSelectedKey, mSelectedClass, mItemList]);

  return (
    <Layout title="McID" description="Minecraft物品ID查询">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        style={{
          padding: "20px",
          height: "calc(100vh - 60px)",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Search
            type="text"
            placeholder="搜索物品..."
            // value={mSearchInputData} // !不要设置value，否则会导致搜索框无法输入
            disabled={mIsLoading} // 加载中禁用
            loading={mIsLoading} // 加载中显示
            addonBefore={
              <Select
                defaultValue={"name"}
                options={[
                  { value: "name", label: "名称" },
                  { value: "type", label: "命名空间" },
                  { value: "id", label: "别名ID" },
                ]}
                onChange={set_mInputSelectedKey}
              />
            }
            onChange={(e) => set_mSearchInputData(e.target.value)}
            onSearch={(value) => set_mSearchInputData(value)}
            style={{ width: "calc(100% - 210px)" }}
          />
          {/* 类别下拉框 */}
          <Select
            style={{ width: "80px", margin: "0 5px" }}
            defaultValue="all"
            disabled={mIsLoading} // 加载中禁用
            onChange={set_mSelectedClass}
            options={[
              { value: "all", label: "所有" },
              ...Array.from(new Set(mItemList.map((item) => item.class))).map(
                (cl) => {
                  return { value: cl, label: cl };
                }
              ),
            ]}
          />
          {/* 版本下拉框 */}
          <Select
            style={{ width: "110px" }}
            disabled={mIsLoading} // 加载中禁用
            defaultValue="default"
            onChange={set_mSelectedVersion}
            options={[
              ...Array.from(new Set(mVersionList)).map((v) => {
                if (v === mSelectedVersion)
                  return { value: "default", label: v }; // 默认选择第一个版本
                return { value: v, label: v };
              }),
            ]}
          />
        </div>

        {/* 卡片展示区 */}
        <div
          style={{
            height: "calc(100vh - 135px)",
            width: "calc(100% - 1px)",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <List
            rowKey="id"
            bordered={true}
            loading={mIsLoading}
            pagination={{
              position: "both",
              align: "end",
            }}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            style={{
              height: "98%",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            dataSource={mFilterShowData}
            renderItem={(mItem) => {
              return (
                <List.Item
                  key={mItem.id}
                  styles={{ width: "100%", height: "201px" }}
                >
                  <Card
                    hoverable
                    actions={[
                      <a
                        key="copy"
                        onClick={() => {
                          navigator.clipboard.writeText(JSON.stringify(mItem));
                        }}
                      >
                        复制JSON
                      </a>,
                      <a key="option2">查看详情</a>,
                    ]}
                  >
                    <Card.Meta
                      avatar={
                        <img
                          loading="lazy"
                          src=""
                          style={{
                            width: "48px",
                            height: "48px",
                          }}
                        />
                      }
                      title={<a>{mItem.name}</a>}
                      description={
                        <Paragraph ellipsis={{ rows: 3 }}>
                          {mItem.description}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
