function Banner({img, h1}) {
    return (
        <>
            <div className="banner-wrapper">
                <div className="banner-img">
                    <img src={img} alt="bannière"/>
                </div>
                <h1 className="banner-title">{h1}</h1>
            </div>
        </>
    )
}

export default Banner