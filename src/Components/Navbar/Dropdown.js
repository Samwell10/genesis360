import Menuitems from "./Menuitems";

const Dropdown = ({submenu, dropdown, depthLevel}) => {
    depthLevel = depthLevel + 1
    console.log(depthLevel)
    let dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenu.map((items, index)=>{
            return(
               <Menuitems items={items} key={index} depthLevel={depthLevel}/>
            )
        })}
    </ul>
    );
}
 
export default Dropdown;