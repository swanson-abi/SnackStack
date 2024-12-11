
import Sidebar from "../../Components/Sidebar/sidebar";
import SingleRecipe from "../../Components/SingleRecipe/singlerecipe";
import "./single.css";

export default function Single() {
    return (
        <div className="single">
            <SingleRecipe/>
            <Sidebar />
        </div>
    );
}