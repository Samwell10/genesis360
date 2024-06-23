import "./Card.css"
import profile1 from "../../Assets/proffile1.jpg"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Card = ({name, username, testimony, date, image}) => {
    return ( 
        <div className="card">
            <div className="card-top">
                <div className="card-user">
                    <div className="card-dp">
                        <img src={image}></img>
                    </div>
                    <div className="card-username">
                        <h3>{name}</h3>
                        <p>{username}</p>
                    </div>
                </div>
                <div className="three-dot">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
            <div className="card-body">
                <p>
                    {testimony}
                    <span>#Genesis360Experience</span>
                </p>
            </div>
            <div className="card-bottom">
                <p>{date}</p>
            </div>
        </div>
     );
}
 
export default Card;