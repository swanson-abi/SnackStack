import Sidebar from "../../components/sidebar/Sidebar";
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