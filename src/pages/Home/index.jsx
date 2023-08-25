import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { useLocations } from "../../hooks/logements"
import Img1 from "../../assets/Image-source-1.png"

function Home() {

    const locations = useLocations()
    
    return (
        <div>
            <Banner 
                img={Img1}
                h1={"Chez vous, partout et ailleurs"}
            />
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