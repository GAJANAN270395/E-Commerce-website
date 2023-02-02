import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
const NavBar = ({onSearch, cartItemCount}) => {
  const [searchQuery, setSearchQuery ] = useState('');

  const handleSubmit = () => {
      if (searchQuery.trim().length) {
          onSearch(searchQuery.trim())
      }
      setSearchQuery('')
  }

  return (
  <div className="wrapper">
      <header className="container">
        <div className="header py-2">
          <div className="grid">
            <Link to="/" className="link">
              <h1 className="brand">E-Commerce</h1>
            </Link>
            <div className="formContainer">
              <form className="search">
                <div className="form-control">
                  <input type="text" value={searchQuery}
                  onChange ={e=>setSearchQuery(e.target.value)} placeholder="Search products"/>
                </div>
                <button type="button" className="search-btn" onClick={handleSubmit}>Search</button>
              </form>
            </div>
            <Link to="/cart" className="link headerCart">
              <img className="cartImg" src="https://st.depositphotos.com/1835807/1475/i/600/depositphotos_14759785-stock-photo-shopping-cart.jpg" alt="cart"/>
              {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
            </Link>
      
          </div>
          </div>
      </header>
  </div>
  )
};
export { NavBar };
