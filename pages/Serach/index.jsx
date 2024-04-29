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
      <div style={{ padding: '20px', height: 'auto' }}> 
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="搜索物品..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div style={{ maxHeight: '60vh', overflowY: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            filteredData.map(item => (
              <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px', display: 'flex', flexDirection: 'column', width: 'calc(100% / 3 - 20px)', minHeight: '200px', maxHeight: '250px' }}>
                <img src={item.img || 'path/to/default/image.png'} alt="" style={{ width: '50px', marginRight: '10px', objectFit: 'cover', alignSelf: 'flex-end' }} onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.png'; }} />
                <div style={{ marginTop: '5px' }}>
                  <h4 style={{ margin: '5px 0' }}>{item.name}</h4>
                  <p style={{ margin: '2px 0' }}>ID: {item.id}</p>
                  <p style={{ margin: '2px 0' }}>DV: {item.dv}</p>
                  <p style={{ margin: '2px 0' }}>Type: {item.type}</p>
                  <p style={{ margin: '2px 0' }}>Path: {item.path}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}