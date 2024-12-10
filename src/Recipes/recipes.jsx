import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from "../Recipe/recipe";

export default function Recipes() {
  const myList = ["Item 1", "Item 2", "Item 3"];
  const GlutenFree = ["Gluten-Free"];
  const cat1 = ["Italian", "Gluten-Free"];
  const cat2 = ["Dessert", "Snacks"];

  const recipes = [
    {
      img: "https://images.pexels.com/photos/20123610/pexels-photo-20123610/free-photo-of-bread-with-hummus-slice-of-salmon-boiled-egg-and-spices.jpeg",
      title: "title 1",
      list: myList,
      desc: "description",
      categories: GlutenFree
    },
    {
      img: "https://images.pexels.com/photos/3323687/pexels-photo-3323687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "title 2",
      list: myList,
      desc: "description 2",
      categories: cat1
    },
    {
      img: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "title 3",
      list: myList,
      desc: "description 3",
      categories: cat2
    },
    {
      img: "https://images.pexels.com/photos/18674118/pexels-photo-18674118/free-photo-of-ribs-served-on-white-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "title 4",
      list: myList,
      desc: "description 4",
      categories: cat1
    },
    {
      img: "https://wholeandheavenlyoven.com/wp-content/uploads/2020/12/Smoked-Salmon-Salad-Right-Overhead.jpg",
      title: "title 5",
      list: myList,
      desc: "description 5",
      categories: GlutenFree
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow-sm">
              <Recipe 
                img={recipe.img}
                title={recipe.title}
                list={recipe.list}
                desc={recipe.desc}
                categories={recipe.categories}
                className="card-body"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}