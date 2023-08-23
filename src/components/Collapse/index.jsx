import Arrow from "../../assets/chevron-en-bas.png"
import { useState } from "react"


function Collapse({ title, text }) {
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
              <img className="collapse-arrow" src={Arrow} alt=""/>
            </div>
          </div>
          <div className={"content " + (isOpen ? "visible" : "")}>
            <div className="inner">{text}</div>
          </div>
        </div>
       
      </>
    );
  }
  

export default Collapse