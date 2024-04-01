import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>
          <Link to={"/"}>
            Med-center meal delivery
          </Link>
        </h1>
        <section className="buttons">
            <Link to={'/cart'} className="cart-link">
                Cart
            </Link>
            <Link to={'/'} onClick={() => localStorage.clear()} className="cart-link">
                Logout
            </Link>
        </section>
    </header>
  )
}

export default Header