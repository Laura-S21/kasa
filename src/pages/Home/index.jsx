import Card from "../../components/Card"
import locationsList from "../../datas/logements.json"

function Home() {
    return (
        <div>
            <div className="head-wrapper">
                <div className="img-box">
                </div>
                <h1 className="head-title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="locations-wrapper">
                <div className="locations-wrapper__cards">
                    {locationsList.map((location) => (
                        <Card 
                        key={location.id}
                        title={location.title}
                        cover={location.cover}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Home