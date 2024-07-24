import "./styles.css";
import axios from "axios";
import Layout from "@theme/Layout";
import React, { useState, useEffect, useCallback } from "react";
import {
  List,
  Card,
  Typography,
  Input,
  Select,
  message,
  Badge,
  Modal,
  Descriptions,
} from "antd";

const { Paragraph, Text } = Typography;
const { Search } = Input;
const { Ribbon } = Badge;

const category2color = (category) => {
  const colorMap = {
    建筑: "cyan",
    物品: "volcano",
    自然: "green",
    装备: "purple",
    "craftingScreen.tab.commands": "purple", // 特殊分类
  };
  return colorMap[category] || "gray";
};
const category2text = (category) => {
  const textMap = {
    "craftingScreen.tab.commands": "命令",
    "craftingScreen.tab.none": "无分类",
  };
  return textMap[category] || category;
};
function insertBetweenElements(arr, insertStr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (i > 0 && i < arr.length - 1) {
      result.push(insertStr);
    }
  }

  return result;
}
function generatorID(id) {
  return Math.random() + Date().toString() + id;
}

export default function McIDPage() {
  const [mIsLoading, set_mIsLoading] = useState(false); // 是否正在加载
  const [mInputData, set_mInputData] = useState(""); // 搜索框输入的内容
  const [mInputSelectedKey, set_mInputSelectedKey] = useState("name"); // 输入框选中的key
  const [mSelectedCategory, set_mSelectedCategory] = useState("all"); // 选择的分类
  const [mSelectedVersion, set_mSelectedVersion] = useState(""); // 选择的版本

  const [mVersionList, set_mVersionList] = useState([]); // 版本列表数据
  const [mFilterData, set_mFilterData] = useState([]); // 过滤后的数据

  const [mIsNewDataStruct, set_mIsNewDataStructure] = useState(false); // 是否是新数据结构
  const [mSourceData, set_mSourceData] = useState(null); // 原始数据
  const [mItems, set_mItems] = useState([]); // 物品列表数据
  const [mTr, set_mTr] = useState({}); // 键翻译数据
  const [mCategory, set_mCategory] = useState([]); // 分类数据
  const [mSerachCanSelectKey, set_mSerachCanSelectKey] = useState([]); // 搜索框可选的key

  // 网络请求数据
  useEffect(() => {
    const fetchVersion = async () => {
      set_mIsLoading(true);
      if (mVersionList.length === 0) {
        const verData = await axios(
          "https://api.github.com/repos/engsr6982/BedrockItems/tags"
        );
        if (verData.status !== 200) return message.error("获取版本列表失败！");
        set_mVersionList(verData.data.map((item) => item.name)); // 获取版本列表
        set_mSelectedVersion(verData.data[0].name); // 默认选择第一个版本
      }
      if (mSelectedVersion === "") return message.error("请选择版本！");
      const itData = await axios(
        // `https://raw.githubusercontent.com/engsr6982/BedrockItems/${mSelectedVersion}/Item.json`
        `https://cdn.jsdelivr.net/gh/engsr6982/BedrockItems@${mSelectedVersion}/Item.json`
      );
      if (itData.status !== 200) return message.error("获取物品列表失败！");
      set_mSourceData(itData.data);
      set_mIsLoading(false);
    };
    fetchVersion();
  }, [mSelectedVersion, mVersionList]);

  // 处理新旧数据
  useEffect(() => {
    if (mSourceData === null) return;
    set_mIsLoading(true);
    if (Object.prototype.toString.call(mSourceData) === "[object Object]") {
      set_mIsNewDataStructure(true); // 新数据结构
      set_mItems(mSourceData.items);
      set_mTr(mSourceData.tr);
      set_mCategory([
        { value: "all", label: "所有" },
        ...mSourceData.category.map((i) => {
          return { value: category2text(i), label: category2text(i) };
        }),
      ]);
      set_mSerachCanSelectKey([
        { value: "name", label: "名称" },
        { value: "typeName", label: "Type" },
        { value: "id", label: "ID" },
      ]);
    } else {
      set_mIsNewDataStructure(false); // 旧数据结构
      set_mItems(mSourceData);
      set_mCategory([
        { value: "all", label: "所有" },
        ...Array.from(new Set(mSourceData.map((it) => it.class))).map((i) => {
          return { value: i, label: i };
        }),
      ]);
      set_mTr({
        name: "名称",
        type: "命名空间",
        id: "ID",
        aux: "特殊值",
        class: "类别",
        icon: "图标",
      });
      set_mSerachCanSelectKey([
        { value: "name", label: "Name" },
        { value: "type", label: "Type" },
        { value: "id", label: "ID" },
      ]);
    }
    set_mIsLoading(false);
  }, [mSourceData]);

  // 搜索过滤
  useEffect(() => {
    set_mIsLoading(true);
    let results = mItems;

    // 搜索过滤
    if (mInputData !== "") {
      results = results.filter((it) =>
        mInputSelectedKey === "id"
          ? it[mInputSelectedKey] === parseInt(mInputData) // ID
          : it[mInputSelectedKey] // 名称或命名空间
              .toLowerCase()
              .trim()
              .includes(mInputData.toLowerCase().trim())
      );
    }
    // 分类过滤
    if (mSelectedCategory !== "all") {
      results = results.filter(
        (item) =>
          (mIsNewDataStruct ? category2text(item.categoryName) : item.class) ===
          mSelectedCategory
      );
    }
    set_mFilterData(results);
    set_mIsLoading(false);
  }, [mInputData, mInputSelectedKey, mSelectedCategory, mItems]);

  const RenderDescription = (it) => {
    const arr = mIsNewDataStruct
      ? ["effectName", "typeName", "aux", "id"]
      : ["type", "id", "aux", "icon"];
    return insertBetweenElements(
      arr.map((i) => {
        return (
          it[i] !== "" && (
            <Text type="secondary" ellipsis={true}>
              {mTr[i]}:<Text> {String(it[i])}</Text>
            </Text>
          )
        );
      }),
      <>
        <br />
      </>
    );
  };

  return (
    <Layout title="McID" description="BedrockItems ID Search">
      <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      {/* 全局Div */}
      <div
        style={{
          padding: "20px",
          height: "calc(100vh - 60px)",
          borderRadius: "10px",
        }}
      >
        {/* 操作栏 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <Search
            type="text"
            placeholder="搜索物品..."
            disabled={mIsLoading}
            loading={mIsLoading} // 加载中显示
            addonBefore={
              <Select
                defaultValue={"name"}
                disabled={mIsLoading}
                options={mSerachCanSelectKey}
                onChange={set_mInputSelectedKey}
              />
            }
            onChange={(e) => set_mInputData(e.target.value)}
            onSearch={(value) => set_mInputData(value)}
            style={{ width: "100%" }}
          />
          {/* 类别下拉框 */}
          <Select
            style={{ width: "80px", margin: "0 4px" }}
            defaultValue="all"
            disabled={mIsLoading}
            onChange={set_mSelectedCategory}
            options={mCategory}
          />
          {/* 版本下拉框 */}
          <Select
            style={{ width: "98px" }}
            disabled={mIsLoading}
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
            bordered={true}
            loading={mIsLoading}
            pagination={{ position: "both", align: "end" }}
            grid={{
              gutter: 0,
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
            dataSource={mFilterData}
            renderItem={(it) => {
              return (
                <List.Item
                  key={generatorID(it.id)}
                  styles={{ width: "100%", height: "201px" }}
                >
                  <Ribbon
                    text={
                      mIsNewDataStruct
                        ? category2text(it.categoryName)
                        : it.class
                    }
                    color={category2color(
                      mIsNewDataStruct ? it.categoryName : it.class
                    )}
                    style={{ zIndex: 1 }}
                  >
                    <Card
                      className="custom-card-padding"
                      hoverable={true}
                      actions={[
                        <a
                          key="copy"
                          onClick={() =>
                            navigator.clipboard.writeText(JSON.stringify(it))
                          }
                        >
                          复制JSON
                        </a>,
                        <a
                          key="view"
                          onClick={() =>
                            Modal.info({
                              mask: true,
                              okText: "关闭",
                              title: `${it.name}`,
                              content: (
                                <>
                                  <Descriptions
                                    size="small"
                                    bordered={true}
                                    layout="vertical"
                                    items={[
                                      ...Object.keys(it).map((k) => {
                                        return {
                                          key: k,
                                          label: mTr[k],
                                          children: (
                                            <Text copyable={true}>{it[k]}</Text>
                                          ),
                                        };
                                      }),
                                    ]}
                                  />
                                </>
                              ),
                            })
                          }
                        >
                          详细信息
                        </a>,
                      ]}
                    >
                      <Card.Meta
                        avatar={
                          <img
                            loading="lazy"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADk0lEQVR4nO2Y3U/TYBTGFxP9J/RWL7zFFW646ZagiciCfJj4N8C1XnkL0g0QNkU0DuRmwTnTYmZYxxQIbDEQMOnGGENgjPkFjn3csMgxb7cBXdt1ny0kO8mTLG3f5Pm1z3nfk6lUtapVrWpVq0pXj2v1GuHwThIOJkbQXlBUDuSBsfZOM9cLNt9He/cVN05zhTzpaf9VSQD2zZ8Dw4SwLAUAnIPY0GJiotIAipv05lUNgKjwG9U7fTC2HAGbP8bKvBxhr12YL2BejgAVTHKErl0YAJs/xgOwrceUARj8vM7qQgIYnD4Yce+wMsyslRWhsSUFImRa+A4vPSFWpoWtgtfpnT4WQtEmHpwNnJjP6tmXjar0jKrSAIYZH4x4dngAxUaJUATA6YXnC1s881mhe+caYGh2Q9T8SZTmhKM06gnBK8+OcgAoHiMS5tNRCoFhxs9Za5wLArmRADKYANP8pgIAKDqL25Lms3qxuA36zNoBl5/d58/u+QMuv7wAQ3PBgs1nNTwbBD3tAwuzz9v3J5mDvFtnRQH6Xf6izbNyh2Bi9RfPPJURuld1APSWUBxKAchnnsqokKYuC8A4X3x0kMxLEbZhxYx/XI+Cx0JB8PEj2OvUwd/bjax2O1pgpbsbbMNm6J/+Vh4AarRSzL/+GoYPgbioefekHX536iChwfJqr+0uWE3jpQGw0XEXH51Rzy5Y16KCxqcCcfD1EpLGcxXXqPvgiepSUQDG+dNBrRhZmAPRN1+K+cQpRG9JPVApWY3jPFPJ1iZIaBv4hrUN6Xu5z+OYThEA1IwozxwzD5rhXzgEKTvFhdDWQ4q0wvHPCCQfcvskjqs3of3mFdkBbENvuObvN8FxJAzZStnJNIS2gf2dLfQMepYLgbXLDrDS1ZUTkXo4It+dGE1DUJCi3udcy4CdXYtjE7IDhNuaBXJez4OQNJ/WGg+gj2YOqwkQvdMovLtohSF4fcGROi7wBRirUgApysoH+DQlDoCrD/kADu8Ngmb+VC1C7feEzZN885JfAcd8glsp+h8e/ZVdjTih2UbKfMpOwlHO1xCBeKuSu+JadUelttEYjrXJDgB1dZcTGnVA+CAjeQcZauzjH0IHGRYUPMjkqJj2VmvZo4QGa1EpWWiqTJQ8zGE9KqULjcRxXP20lEk07zgtdyVxTJfbEyKHVkDx2IgVamw0mKHZBu3t6IRlhX7j2ATabdAzQov/A+VQ83mEsVV5AAAAAElFTkSuQmCC" // TODO: 加载物品图标
                            style={{ width: "48px", height: "48px" }}
                          />
                        }
                        title={<a>{it.name}</a>}
                        description={
                          <Paragraph style={{ margin: 0 }}>
                            {RenderDescription(it)}
                          </Paragraph>
                        }
                      />
                    </Card>
                  </Ribbon>
                </List.Item>
              );
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
