import { Link, BrowserRouter } from "react-router-dom";
//mport "./sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sidebar() {
  return (
    <BrowserRouter>
      <div className="col-md-3 sidebar p-4 bg-light">
        <div className="sidebar-item">
          <h4 className="text-center fw-bold mb-4">MOST POPULAR</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 bg-light text-center">
              <Link className="text-decoration-none link-dark" to="/posts?cat=GlutenFree">
                Gluten Free
              </Link>
            </li>
            <li className="list-group-item border-0 bg-light text-center">
              <Link className="text-decoration-none link-dark" to="/posts?cat=Italian">
                Italian
              </Link>
            </li>
            <li className="list-group-item border-0 bg-light text-center">
              <Link className="text-decoration-none link-dark" to="/posts?cat=Mexican">
                Mexican
              </Link>
            </li>
            <li className="list-group-item border-0 bg-light text-center">
              <Link className="text-decoration-none link-dark" to="/posts?cat=Desserts">
                Desserts
              </Link>
            </li>
            <li className="list-group-item border-0 bg-light text-center">
              <Link className="text-decoration-none link-dark" to="/posts?cat=Snacks">
                Snacks
              </Link>
            </li>
            <li className="list-group-item border-0 bg-light text-center">
              <Link className="text-decoration-none link-dark" to="/posts?cat=Salads">
                Salads
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}