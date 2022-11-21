import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="featured properties" className="fpImg" />
            <span className="fpName">Favo de Luna</span>
            <span className="fpCity">Bandung</span>
            <span className="fpPrice">Starting from $135</span>
            <div className="fpRating">
                <button>7.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="featured properties" className="fpImg" />
            <span className="fpName">Council</span>
            <span className="fpCity">Jakarta</span>
            <span className="fpPrice">Starting from $135</span>
            <div className="fpRating">
                <button>7.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="featured properties" className="fpImg" />
            <span className="fpName">Yellow Bee</span>
            <span className="fpCity">Bali</span>
            <span className="fpPrice">Starting from $135</span>
            <div className="fpRating">
                <button>7.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="featured properties" className="fpImg" />
            <span className="fpName">Townhouse Jakarta</span>
            <span className="fpCity">Jakarta</span>
            <span className="fpPrice">Starting from $135</span>
            <div className="fpRating">
                <button>7.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties