import React, { useState, useEffect } from "react";
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

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [mIsLoading, set_mIsLoading] = useState(false); // 是否正在加载

  // 请求json数据
  useEffect(() => {
    const fetchData = async () => {
      set_mIsLoading(true);
      const result = await axios(
        "https://raw.githubusercontent.com/engsr6982/Minecraft-Bedrock_ID-SQLite/main/JSON/mcid_old.json"
      );
      setData(result.data.mcid);
      set_mIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let results = data;
    if (searchTerm !== "") {
      results = results.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category !== "all") {
      results = results.filter((item) => item.type === category);
    }
    setFilteredData(results);
  }, [searchTerm, category, data]);

  const handleCopyJson = (item) => {
    navigator.clipboard.writeText(JSON.stringify(item));
  };

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "calc(100% - 50px - 150px - 10px)" }}
          />
          <Select
            defaultValue="all"
            style={{ width: "120px", margin: "0 5px" }}
            onChange={setCategory}
          >
            <Option value="all">所有分类</Option>
            {/* 动态生成选项 */}
            {Array.from(new Set(data.map((item) => item.type))).map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
          <Button
            onClick={() => {
              /* 切换数据源逻辑 */
            }}
          >
            切换版本
          </Button>
        </div>

        {/* 卡片展示区 */}
        <div style={{ height: "calc(100vh - 135px)", overflowY: "auto" }}>
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
            dataSource={[
              ...[
                {
                  id: 1,
                  title: "卡片列表",
                  description: "awaa",
                },
                {
                  id: 1,
                  title: "卡片列表",
                  description: "awaa",
                },
                {
                  id: 1,
                  title: "卡片列表",
                  description: "awaa",
                },
                {
                  id: 1,
                  title: "卡片列表",
                  description: "awaa",
                },
                {
                  id: 1,
                  title: "卡片列表",
                  description: "awaa",
                },
                {
                  id: 1,
                  title: "卡片列表",
                  description: "awaa",
                },
              ],
            ]}
            // 渲染卡片
            renderItem={(item) => {
              return (
                <List.Item
                  key={item.id}
                  styles={{ width: "100%", height: "201px" }}
                >
                  <Card
                    hoverable
                    actions={[
                      <a key="option1" onClick={handleCopyJson({})}>
                        复制JSON
                      </a>,
                      <a key="option2">查看详情</a>,
                    ]}
                  >
                    <Card.Meta
                      avatar={
                        <Avatar
                          size={48}
                          src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.pngs"
                          onError={() => {
                            message.error("图片加载失败！");
                            return false;
                          }}
                        />
                      }
                      title={<a>{item.title}</a>}
                      description={
                        <Paragraph ellipsis={{ rows: 3 }}>
                          {item.description}
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
