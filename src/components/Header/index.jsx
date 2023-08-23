import Logo from "../../assets/LOGO.png"
import {Link, NavLink} from "react-router-dom"
import "../../_index.scss"

const linkClassName = ({ isActive }) => (isActive ? 'isActive' : 'header__link');

function Header() {

    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} alt="Logo Kasa" className="header__logo"/>
            </Link>
            <nav className="header__nav">
                <NavLink to="/" className={linkClassName}>Accueil</NavLink>
                <NavLink to="/about" className={linkClassName}>A Propos</NavLink>
            </nav>
        </div>
        )
}

export default Header