import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import axios from "axios";
import "./styles.css"; // 引入CSS样式

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        "https://raw.githubusercontent.com/engsr6982/Minecraft-Bedrock_ID-SQLite/main/JSON/mcid_old.json"
      );
      setData(result.data.mcid);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData(data.splice(0, 5));
    }
  }, [searchTerm, data]);

  const handleImageError = (e) => {
    e.target.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADk0lEQVR4nO2Y3U/TYBTGFxP9J/RWL7zFFW646ZagiciCfJj4N8C1XnkL0g0QNkU0DuRmwTnTYmZYxxQIbDEQMOnGGENgjPkFjn3csMgxb7cBXdt1ny0kO8mTLG3f5Pm1z3nfk6lUtapVrWpVq0pXj2v1GuHwThIOJkbQXlBUDuSBsfZOM9cLNt9He/cVN05zhTzpaf9VSQD2zZ8Dw4SwLAUAnIPY0GJiotIAipv05lUNgKjwG9U7fTC2HAGbP8bKvBxhr12YL2BejgAVTHKErl0YAJs/xgOwrceUARj8vM7qQgIYnD4Yce+wMsyslRWhsSUFImRa+A4vPSFWpoWtgtfpnT4WQtEmHpwNnJjP6tmXjar0jKrSAIYZH4x4dngAxUaJUATA6YXnC1s881mhe+caYGh2Q9T8SZTmhKM06gnBK8+OcgAoHiMS5tNRCoFhxs9Za5wLArmRADKYANP8pgIAKDqL25Lms3qxuA36zNoBl5/d58/u+QMuv7wAQ3PBgs1nNTwbBD3tAwuzz9v3J5mDvFtnRQH6Xf6izbNyh2Bi9RfPPJURuld1APSWUBxKAchnnsqokKYuC8A4X3x0kMxLEbZhxYx/XI+Cx0JB8PEj2OvUwd/bjax2O1pgpbsbbMNm6J/+Vh4AarRSzL/+GoYPgbioefekHX536iChwfJqr+0uWE3jpQGw0XEXH51Rzy5Y16KCxqcCcfD1EpLGcxXXqPvgiepSUQDG+dNBrRhZmAPRN1+K+cQpRG9JPVApWY3jPFPJ1iZIaBv4hrUN6Xu5z+OYThEA1IwozxwzD5rhXzgEKTvFhdDWQ4q0wvHPCCQfcvskjqs3of3mFdkBbENvuObvN8FxJAzZStnJNIS2gf2dLfQMepYLgbXLDrDS1ZUTkXo4It+dGE1DUJCi3udcy4CdXYtjE7IDhNuaBXJez4OQNJ/WGg+gj2YOqwkQvdMovLtohSF4fcGROi7wBRirUgApysoH+DQlDoCrD/kADu8Ngmb+VC1C7feEzZN885JfAcd8glsp+h8e/ZVdjTih2UbKfMpOwlHO1xCBeKuSu+JadUelttEYjrXJDgB1dZcTGnVA+CAjeQcZauzjH0IHGRYUPMjkqJj2VmvZo4QGa1EpWWiqTJQ8zGE9KqULjcRxXP20lEk07zgtdyVxTJfbEyKHVkDx2IgVamw0mKHZBu3t6IRlhX7j2ATabdAzQov/A+VQ83mEsVV5AAAAAElFTkSuQmCC";
  };

  return (
    <Layout title="SearchPage" description="SearchPage React Page">
      <div style={{ padding: "20px", height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="搜索物品..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>
        <div
          className="el-row"
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="el-col el-card box-card"
                style={{
                  flex: "1 1 auto",
                  minWidth: "360px",
                  maxWidth: "420px",
                  minHeight: "180px",
                  maxHeight: "220px",
                  margin: "0 10px 10px 0",
                  position: "relative",
                }}
              >
                <img
                  src={item.img}
                  alt="icon"
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    width: "16px",
                    height: "16px",
                    zIndex: 1000,
                  }}
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="header">
                  <span className="header-label">{item.name}</span>
                </div>
                <div style={{ margin: "15px" }}>
                  <div>
                    <div className="card-label">Type</div>
                    <span>{item.id}</span>
                  </div>
                  <div>
                    <div className="card-label">特殊值</div>
                    <span>{item.dv}</span>
                  </div>
                  <div>
                    <div className="card-label">类别</div>
                    <span>{item.type}</span>
                  </div>
                  <div>
                    <div className="card-label">图片</div>
                    <span>{item.path}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}
