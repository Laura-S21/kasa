import rightArrow from "../../assets/fleche-droite.png"
import leftArrow from "../../assets/fleche-gauche.png"
import { useState } from "react";
import { useLocationsById } from "../../hooks/logements"
import { useParams } from "react-router-dom"


function Slideshow() {

    const {id} = useParams()
    const location = useLocationsById(id)
    const [index, setIndex] = useState(0);
    const length = location.pictures.length;

    const handleNext = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    };

    const handlePrev = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
    };

    if (!Array.isArray(location.pictures) || location.pictures.length <= 0) {
        return null;
    }
    

    return (
        <div className="slideshow-wrapper">
            <img src={location.pictures[index]} className="slideshow-wrapper__img" alt="Logement" />
            <img src={rightArrow} className="slideshow-wrapper__right-arrow" alt="flèche de droite" onClick={handleNext} />
            <img src={leftArrow} className="slideshow-wrapper__left-arrow" alt="flèche de gauche" onClick={handlePrev} />
            <p className="slideshow-wrapper__counter">{(index + 1) + "/" + location.pictures.length}</p>
        </div>
    )
}

export default Slideshow