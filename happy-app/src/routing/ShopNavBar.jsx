import { Link,Outlet } from "react-router-dom";
const ShopNavBar = () =>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-these="dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="elecs/">Electronic</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="cloths/">clothing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bikes/">Bikes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cars/">Cars</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/state_share">State Sharing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/context">context</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/ref">Ref</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default ShopNavBar;