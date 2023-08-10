import Logo from "../../assets/LOGO.png"
import {Link} from "react-router-dom"
import "../../_index.scss"

function Header() {

    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} alt="Logo Kasa" className="header__logo"/>
            </Link>
            <nav className="header__nav">
                <Link to="/" className="header__link">Accueil</Link>
                <Link to="/about" className="header__link">A Propos</Link>
            </nav>
        </div>
        )
}

export default Header