import { Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './recipe.css';
export default function Recipe({ img, title, list, desc, categories }) {
    return (
        <BrowserRouter>
            <div className="card shadow-sm mb-4">
                <img
                    className="card-img-top"
                    src={img}
                    alt={title}
                    style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                    {/* Categories */}
                    <div className="mb-3">
                        {categories.map((category, index) => (
                            <Link 
                                key={index} 
                                to={`/recipes?cat=${category}`}
                                className="badge bg-secondary text-decoration-none me-2"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>

                    {/* Title */}
                    <h5 className="card-title mb-3">
                        <Link 
                            to={`/recipe/${title}`} 
                            className="text-dark text-decoration-none"
                        >
                            {title}
                        </Link>
                    </h5>

                    <hr className="my-3" />

                    {/* Date */}
                    <small className="text-muted d-block mb-3">1 hour ago</small>

                    {/* Description */}
                    <p className="card-text mb-4">
                        {desc}
                    </p>

                    {/* Ingredients */}
                    <div className="bg-light p-3 rounded">
                        <h6 className="mb-3">Ingredients:</h6>
                        {list}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}