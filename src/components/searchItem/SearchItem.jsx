import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Green Resident Apartments</h1>
            <span className="siDistance">200m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air Conditioning
            </span>
            <span className="siFeatures">Entire studio + 1 bathroom + 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Exellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$153</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See Avaibility</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem