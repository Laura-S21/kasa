import Error404 from "../../assets/404.png"
import { Link } from "react-router-dom"

function Error() {
    return (
        <div>
            <div className="error-wrapper">
                <img src={Error404} className="error-wrapper__logo" alt="404 error" />
                <p className="error-wrapper__text">Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error-wrapper__link">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default Error