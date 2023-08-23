import rightArrow from "../../assets/fleche-droite.png"
import leftArrow from "../../assets/fleche-gauche.png"
import defaultPicture from "../../assets/Background.png"

function Slideshow() {
    return (
        <div className="slideshow-wrapper">
            <img src={defaultPicture} className="slideshow-wrapper__img" alt="Logement" />
            <img src={rightArrow} className="slideshow-wrapper__right-arrow" alt="flèche de droite" />
            <img src={leftArrow} className="slideshow-wrapper__left-arrow" alt="flèche de gauche" />
            <p className="slideshow-wrapper__counter">1/4</p>
        </div>
    )
}

export default Slideshow