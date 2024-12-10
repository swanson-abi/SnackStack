
import Sidebar from "../../Sidebar/sidebar";
import SingleRecipe from "../../SingleRecipe/singlerecipe";
import "./single.css";

export default function Single() {
    return (
        <div className="single">
            <SingleRecipe />
            <Sidebar />
        </div>
    );
}