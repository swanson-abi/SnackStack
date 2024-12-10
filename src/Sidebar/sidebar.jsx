import React from 'react';
import { Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sidebar() {
  const categories = [
    { name: 'Gluten Free', path: 'GlutenFree' },
    { name: 'Italian', path: 'Italian' },
    { name: 'Mexican', path: 'Mexican' },
    { name: 'Desserts', path: 'Desserts' },
    { name: 'Snacks', path: 'Snacks' },
    { name: 'Salads', path: 'Salads' }
  ];

  return (
    <BrowserRouter>
      <div className="col-md-3 sidebar p-4 bg-light shadow-sm">
        <div className="sidebar-item">
          <h4 className="fs-3 text-center fw-bold mb-4 text-primary">MOST POPULAR</h4>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((category) => (
              <Link 
                key={category.path}
                to={`/posts?cat=${category.path}`}
                className="btn btn-outline-primary rounded-pill px-3 py-2 m-1 text-decoration-none"
                style={{
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}