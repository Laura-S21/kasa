import valuesList from "../../datas/valeurs.json"
import Collapse from "../../components/Collapse"
import Banner from "../../components/Banner"
import Img2 from "../../assets/Image-source-2.png"

function About() {
    return (
        <div>
            <Banner 
                img={Img2}
            />
            <div className="value-boxes">
                <div className="value-box-wrapper">
                    {valuesList.map((value)=> (
                        <Collapse
                            key={value.id}
                            title={value.value}
                            text={value.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About