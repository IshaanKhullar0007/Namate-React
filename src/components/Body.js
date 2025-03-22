import RestuarentCard from "./RestuarentCard";
import dataObj from "../../utlis/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
const Body = () => {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [search,setSearch] = useState('');
  const filter = () => {
    const temp = data.filter((i) => i.info.avgRating >= 4.5);
    setTempData(temp);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.22810&lng=75.77870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setTempData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
  const updateSearch = ()=>{
    const temp = data.filter((i)=>i.info.name.toLowerCase().includes(search.toLowerCase()));
    setTempData(temp);
  }
  return tempData.length == 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search">
        <div className="search-button">
          <input type = "text" className="search-bar" onChange={(e)=>{
            setSearch(e.target.value)
            if(e.target.value == "")
              setTempData(data);
            else
              updateSearch()
            }} value={search} />
        </div>
        <button className="searchButton" onClick={() => filter()}>
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {tempData.map((i) => (
          <RestuarentCard key={i.info.id} resData={i} />
        ))}
      </div>
    </div>
  );
};
export default Body;
