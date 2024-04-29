import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import axios from 'axios';

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios('https://raw.githubusercontent.com/engsr6982/Minecraft-Bedrock_ID-SQLite/main/JSON/mcid_old.json');
      setData(result.data.mcid);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm !== '') {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData(data.slice(0, 5)); // 默认显示5个
    }
  }, [searchTerm, data]);

  return (
    <Layout title="SearchPage" description="SearchPage React Page">
      {/* 整个组件的div */}
      <div style={{ padding: '20px' }}> 
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="搜索物品..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            filteredData.map(item => (
              <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <h4>{item.name}</h4>
                <p>ID: {item.id}</p>
                <img src={item.img} alt={item.name} style={{ width: '100px' }} />
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}