import { useParams } from "react-router-dom"
import { useLogementsById } from "../../hooks/logements"

function Logement() {
    const {id} = useParams()
    const logement = useLogementsById(id)

    return (
        <div>
            <p>Logement : {logement.title}</p>
        </div>
    )
}

export default Logement