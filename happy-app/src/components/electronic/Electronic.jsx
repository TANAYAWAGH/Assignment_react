import { Link,Outlet} from "react-router-dom"
const Electronic = ()=>{
    return(
        <>
    <h2 className="text-center text-bg-success">Electronic Section</h2>
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
    <ul className="navbar-nav">

        <li className="nav-item">
            <Link className="nav-link active" to="mobile">Mobile</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="laptop">Laptop</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="refrigerator">Refrigerator</Link>
        </li>
        </ul>
    </nav>
    <Outlet/>
    </>
    )
}

export default Electronic;