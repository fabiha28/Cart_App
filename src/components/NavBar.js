import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../components/images/logo.png";
import { Row, Col, Input, Badge, Select, Button } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, DownOutlined, ShoppingCartOutlined  } from "@ant-design/icons";
import Search from "../components/images/search.png"
import Cart from "../components/images/frame.png";
import Vector from "../components/images/Vector.png"

const { Option } = Select;

function NavBar() {
  const [click, setClick] = useState(false);
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([])

  const handleSearch = () => {
    const filteredResults = products.filter((product) => {
      const matchesCategory = searchCategory === "All" || product.category === searchCategory;
      const matchesKeyword = product.title.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchesCategory && matchesKeyword;
    });

    setSearchResults(filteredResults);
  };

  const products = [
    // Your product data here
  ];
  

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container">
        <Row className="header">
          <Col xl={8} lg={4} md={6} sm={24} xs={12}>
            <div className="logoWrapper mTop">
              <div>
                <Link>
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
            </div>
          </Col>

          <Col xl={10} lg={20} md={12} sm={24} xs={24} className="search-bar-container">
          <div className="parentDiv">
        <div className="displayFlex">
          <Select
            defaultValue="All"
            className="selectCategory"
            onChange={(value) => setSearchCategory(value)}
          >
            <Option value="All">All</Option>
            {/* Add other category options here */}
          </Select>
          <input
            type="text"
            placeholder="Search Here"
            className="inputField"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            className="searchBar"
            onClick={handleSearch}
          />
        </div>
      </div>
          </Col>

          <Col xl={6} lg={20} md={6} xs={12} sm={12}>
            <div className="cart-logo-wrapper">
            <ShoppingCartOutlined className="cart-icon"/>
            <p>Cart</p>
            </div>
          </Col>

        </Row>

        <div className=" small-screen parentDiv">
          <div className="displayFlex">
            <p className="text">All</p>
            <DownOutlined className="downIcon" />
            <input type="text" placeholder="Search Here" className="inputField" />
            <SearchOutlined className="searchBar" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default NavBar;



