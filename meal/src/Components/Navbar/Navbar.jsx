import './Navbar.css'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
<div className="navbar-wrap">
<div className="navbar">
        <div className="container">
            <ul className="navbar-left">
                <li className="navbar-item logo">
                    <Link to="/" className="navbar-link logo">SFood</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link active">Главная</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/fillial" className="navbar-link">Филиалы </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/info" className="navbar-link">О нас</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link">Контакты</Link>
                </li>
            </ul>
            <div className="navbar-right">
                <button className="navbar-btn navbar-icons">
                    <a href="#" className="navbar-icon"><i className="fa-solid fa-cart-shopping"></i></a>
                </button>
                <button className="navbar-btn">
                    <a href="#" className="navbar-sublink">Войти</a>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Navbar