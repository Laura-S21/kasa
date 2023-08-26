import Arrow from "../../assets/chevron-en-bas.png"
import { useState } from "react"


function Collapse({ title, content }) {
    const [isOpen, setOpen] = useState(false);
  
    function handleClick() {
      setOpen((prevState) => !prevState);
    }
  
    return (
      <>
        <div className="collapse">
          <div className="collapse-header" onClick={handleClick}>
            {title}
            <div
              className={"collapse-icon " + (isOpen ? "rotateDown" : "rotateUp")}
            >
              <img className="collapse-arrow" src={Arrow} alt="Dérouler"/>
            </div>
          </div>
          <div className={"content " + (isOpen ? "visible" : "")}>
            <div className="inner">{content}</div>
          </div>
        </div>
       
      </>
    );
  }
  

export default Collapse