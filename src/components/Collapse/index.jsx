import Arrow from "../../assets/chevron-en-bas.png"
import { useState } from "react"

function Collapse (props) {
    
    const [isClosed, setIsClosed] = useState(true)

    const handleClick = () => (
        setIsClosed(prevValue => !prevValue)
    )

    return (
        <div>
            <div className={"value-box " + (!isClosed ? "value-box--open" : "")} onClick={handleClick}>
                    <p className="value-box__title">{props.value} {isClosed.toString()}</p>
                    <img className="value-box__arrow" src={Arrow} alt="Dérouler"/>

            </div>
        </div>
    )
}

export default Collapse