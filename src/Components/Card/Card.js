import "./Card.css"
import profile1 from "../../Assets/proffile1.jpg"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Card = () => {
    return ( 
        <div className="card">
            <div className="card-top">
                <div className="card-user">
                    <div className="card-dp">
                        <img src={profile1}></img>
                    </div>
                    <div className="card-username">
                        <h3>GraceFood</h3>
                        <p>@gracefood</p>
                    </div>
                </div>
                <div className="three-dot">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
            <div className="card-body">
                <p>
                    Genesis360 has simplified my life! Flexible repayment plans, easy logistics, and great discounts. Couldn't ask for more.
                    <span>#Genesis360Experience</span>
                </p>
            </div>
            <div className="card-bottom">
                <p>11:35pm . Jun 1, 2023</p>
            </div>
        </div>
     );
}
 
export default Card;