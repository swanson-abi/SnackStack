
import Header from "../../Components/Header/header";
// import Recipes from "../../Components/Recipes/recipes";
// import Sidebar from "../../Components/Sidebar/sidebar";
import Veggie from "../../Components/Veggie";
import Popular from "../../Components/Popular";

import "./home.css";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Veggie/>
      <Popular/>
      {/* <Sidebar /> */}
    </div>
  </>

  );
}