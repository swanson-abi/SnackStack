import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container">
                {/* Left */}
                <div className="fs-2 navbar-brand">
                    <a href="https://github.com/swanson-abi/SnackStack" 
                       className="text-dark fs-4">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>

                {/* Center */}
                <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="fs-2 collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <a className="nav-link" href="./Home">Home</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="./Recipes">Recipes</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="./Calendar">Calendar</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="./Login">Login</a>
                        </li>
                    </ul>
                </div>

                {/* Right */}
                <div className=" fs-2 d-flex align-items-center">
                    <i className="nav-search fa-solid fa-magnifying-glass me-3"></i>
                    <img
                        className="nav-img rounded-circle"
                        href="./Settings"
                        src="https://images.pexels.com/photos/4236828/pexels-photo-4236828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Profile"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                </div>
            </div>
        </nav>
    )
}