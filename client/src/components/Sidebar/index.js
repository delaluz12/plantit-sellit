import './sidebar.css'
import CategoryMenu from "../CategoryMenu";
import Cart from "../Cart";


export default function Sidebar() {
    return (
        <div className="sidebar">

            <CategoryMenu />
            <Cart/>
        </div>
    )
}