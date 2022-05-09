import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Cryptocurrencies,
  CryptoDetails,
  Homepage,
  News,
} from "./components";

const { Footer } = Layout;

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              {/* <Route exact path="/exchanges" element={<Exchanges />} /> */}
              <Route exact path="/news" element={<News />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <Footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br /> All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </Footer>
      </div>
    </div>
  );
}

export default App;
