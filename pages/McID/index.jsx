import React, { useState, useEffect, useCallback } from "react";
import {
  List,
  Card,
  Typography,
  Button,
  Avatar,
  Input,
  Select,
  message,
} from "antd";
import axios from "axios";
import Layout from "@theme/Layout";

const { Paragraph } = Typography;
const { Option } = Select;

/* 

Github Api:
tags: https://api.github.com/repos/engsr6982/Minecraft-ItemList/tags

file: https://raw.githubusercontent.com/engsr6982/Minecraft-ItemList/main/Item.json

file_with_version: https://raw.githubusercontent.com/engsr6982/Minecraft-ItemList/v1.19.73/Item.json

file json structure:

[
	{
		"name": "橡木板",
		"type": "minecraft:planks",
		"id": null,
		"aux": 0,
		"class": "建筑",
		"icon": null
	}
]

*/

export default function McIDPage() {
  const [mIsLoading, set_mIsLoading] = useState(false); // 是否正在加载

  const [mVersionList, set_mVersionList] = useState([]); // 版本列表数据
  const [mItemList, set_mItemList] = useState([]); // 物品列表数据

  const [mSearchInputData, set_mSearchInputData] = useState(""); // 搜索框输入数据
  const [mSelectedClass, set_mSelectedClass] = useState("all"); // 选择的分类
  const [mSelectedVersion, set_mSelectedVersion] = useState(""); // 选择的版本

  const [mFilterShowData, set_mFilterShowData] = useState([]);

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
    let results = mItemList;
    if (mSearchInputData !== "") {
      results = results.filter((item) =>
        item.name.toLowerCase().includes(mSearchInputData.toLowerCase())
      );
    }
    if (mSelectedClass !== "all") {
      results = results.filter((item) => item.type === mSelectedClass);
    }
    set_mFilterShowData(results);
  }, [mSearchInputData, mSelectedClass, mItemList]);

  return (
    <Layout title="McID" description="Minecraft物品ID查询">
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
          <Input
            type="text"
            placeholder="搜索物品..."
            value={mSearchInputData}
            onChange={(e) => set_mSearchInputData(e.target.value)}
            style={{ width: "calc(100% - 210px)" }}
          />
          {/* 类别下拉框 */}
          <Select
            style={{ width: "104px", margin: "0 5px" }}
            defaultValue="all"
            onChange={set_mSelectedClass}
            options={[
              { value: "all", label: "所有类别" },
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
            defaultValue="default"
            onChange={set_mSelectedVersion}
            options={[
              { value: "default", label: "选择版本" },
              ...Array.from(new Set(mVersionList)).map((v) => {
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
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            dataSource={mFilterShowData}
            // 渲染卡片
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
                        <Avatar
                          size={48}
                          src=""
                          onError={() => {
                            message.error("图片加载失败！");
                            return false;
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
