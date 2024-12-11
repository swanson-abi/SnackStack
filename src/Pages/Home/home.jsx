
import Header from "../../Components/Header/header";
import Search from "../../Components/Search";
import Veggie from "../../Components/Veggie";
import Popular from "../../Components/Popular";

import "./home.css";
import Category from "../../Components/Category";

export default function Home() {
  return (
    <>
      <Header />
      <br/>
      <div className="search-bar">
      <Search/>
      </div>
      <Category/>
      <Veggie />
      <div>
        <Popular />
        {/* <Sidebar /> */}
      </div>
    </>

  );
}