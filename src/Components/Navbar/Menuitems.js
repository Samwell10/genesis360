import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

const Menuitems = ({items, depthLevel}) => {
    const [dropdown, setDropDown] = useState(false)
    let ref = useRef()
    useEffect(()=>{
        const handler = (event) =>{
            if(dropdown && ref.current && !ref.current.contains(event.target)){
                setDropDown(false)
            }
        }
        document.addEventListener("mousedown", handler)
        document.addEventListener("touchstart", handler)
        return()=>{
            document.removeEventListener("mousedown", handler)
            document.removeEventListener("touchstart", handler)
        }
    },[dropdown])
    const onMouseEnter = () =>{
        setDropDown(true)
    }
    const onMouseLeave = () =>{
        setDropDown(false)
    }
    return ( 
        <li className="nav-text" ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}   
        >
        {items.submenu ? (
            <>
                <button aria-haspopup="menu" aria-expanded={dropdown ? "true": "false"}
                    onClick={()=>setDropDown((prev)=> !prev)}
                >
                    {items.title}
                    {depthLevel === 0 ? <IoMdArrowDropdown /> : <IoMdArrowDropdown/>}
                </button>
                <Dropdown submenu={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
            </>
        ):(
            <Link to={items.link }>{items.title}</Link>
        )}
    </li>
     );
}
 
export default Menuitems;