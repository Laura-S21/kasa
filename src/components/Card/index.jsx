
function Card(props) {
    return (
        <div className="card-wrapper">
            <h2 className="card-wrapper__title">{props.title}</h2>
            <div className="card-wrapper__img-gradient"></div>
            <img className="card-wrapper__cover" src={props.cover} alt="location" />
        </div>
    )
}

export default Card