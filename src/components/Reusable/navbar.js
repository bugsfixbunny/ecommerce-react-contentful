import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"

class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      { id: 1, text: "home", url: "/" },
      { id: 2, text: "aboutUs", url: "/about" },
      { id: 3, text: "services", url: "/services" },
      { id: 4, text: "contact", url: "/contact" },
    ],
  }
  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="image goes here" width="40px"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.myToggler}
        >
          <span className="text-white">menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav mr-5 ml-auto">
            {this.state.menus.map(item => {
              return (
                <li key={item.id} className="nav-item ">
                  <Link
                    to="/"
                    className="nav-link text-white"
                    to={item.url}
                    href="#"
                  >
                    {item.text}
                  </Link>
                </li>
              )
            })}

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
