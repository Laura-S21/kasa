import Card from "../../components/Card"
import { useLocations } from "../../hooks/logements"

function Home() {

    const locations = useLocations()
    
    return (
        <div>
            <div className="head-wrapper">
                <div className="img-box">
                </div>
                <h1 className="head-title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="locations-wrapper">
                <div className="locations-wrapper__cards">
                    {locations.map((location) => (
                        <Card 
                        key={location.id}
                        title={location.title}
                        cover={location.cover}
                        id={location.id}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Home