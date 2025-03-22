import { CDN_URL } from "../../utlis/constants";
const RestuarentCard = ({resData})=>{
    // const {resData} = props;
    // const {name,cuisines,avgRating,costForTwo} = resData.info;
    const {name,cuisines,cloudinaryImageId,avgRating,costForTwo,} = resData.info;
    return(
        <div className='res-card' style={{backgroundColor:"#f0f0f0",}}>
            <img src = {CDN_URL+cloudinaryImageId} className='res-logo' />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} Stars</h4> 
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default RestuarentCard;