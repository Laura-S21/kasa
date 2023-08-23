import { useParams } from "react-router-dom"
import { useLocationsById, /*useLocations*/ } from "../../hooks/logements"
import Slideshow from "../../components/Slideshow"

function Logement() {
    const {id} = useParams()
    const location = useLocationsById(id)
    // const locations = useLocations()

    return (
        <div className="location-wrapper">
            <Slideshow />
            <h1 className="location-wrapper__title">{location.title}</h1>
            <p className="location-wrapper__map">{location.location}</p>
        </div>
    )
}

export default Logement