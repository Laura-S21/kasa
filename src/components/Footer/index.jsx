import WhiteLogo from "../../assets/LOGO-BLANC.png"

function Footer() {
    return (
        <div>
            <div className="footer-wrapper">
                <img src={WhiteLogo} alt="Kasa" className="footer-wrapper__logo"/>
                <p className="footer-wrapper__text">© 2020 Kasa. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer