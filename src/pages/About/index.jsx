import valuesList from "../../datas/valeurs.json"
import Collapse from "../../components/Collapse"

function About() {
    return (
        <div>
            <div className="about-head-wrapper">
                <div className="about-img-box">
                </div>
            </div>
            <div className="value-box-wrapper">
                {valuesList.map((value)=> (
                    <Collapse
                        key={value.id}
                        value={value.value}
                        text={value.text}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default About