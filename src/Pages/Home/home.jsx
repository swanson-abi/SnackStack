
import Header from "../../Header/header";
import Recipes from "../../Recipes/recipes";
import Sidebar from "../../Sidebar/sidebar";

import "./home.css";

export default function Home() {

  return (
    <>
      <Header/>
      <div className="home">
        <Recipes />
        <Sidebar />
      </div>
    </>
  );
}