import { useParams } from "react-router-dom"
import { useLocationsById } from "../../hooks/logements"
import Slideshow from "../../components/Slideshow"
import redStar from "../../assets/red-star.png"
import greyStar from "../../assets/grey-star.png"
import Collapse from "../../components/Collapse"


function Logement() {
    const {id} = useParams()
    const location = useLocationsById(id)
    const redStars = Array(5).fill(redStar)
    const greyStars = Array(5).fill(greyStar)

    return (
        <>
            <Slideshow />
                <div className="location-wrapper">
                    <h1 className="location-wrapper__title">{location.title}</h1>
                    <p className="location-wrapper__map">{location.location}</p>
                    <div className="tags-wrapper">
                        {location.tags.map((locationTag) => (
                            <div className="tag-button"
                                key={locationTag}
                                >
                                {locationTag}
                            </div>
                        ))}
                    </div>
                    <div className="host-wrapper">
                            <p className="host-wrapper__name">{location.host.name}</p>
                            <img className="host-wrapper__pic" src={location.host.picture} alt="Hôte" />
                            
                    </div>
                    <div className="host-wrapper__rating">
                        {redStars.slice(5-location.rating).map((redStar, index )=> {
                            return <img className="host-wrapper__rating-star" src={redStar} alt="" key={"redStar"+index}/>
                        })}

                        {greyStars.slice(location.rating).map((greyStar, index) => {
                            return <img className="host-wrapper__rating-star" src={greyStar} alt="" key={"greyStar"+index}/>
                        })}
                    </div>
                </div>
                <div className="location-collapse-wrapper">
                    <div className="location-collapse" >
                        <Collapse
                            key={location.id}
                            title={"Description"}
                            text={location.description}
                        />
                    </div>
                    <div className="location-collapse">
                        <Collapse
                            key={location.id}
                            title={"Équipements"}
                            text={location.equipments}
                        />
                    </div>
                </div>
        </>
    )
}

export default Logement