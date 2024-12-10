import "./write.css";
import React from "react";
export default function Write() {
    return (
        <div className="write">
            <img
            className="writeImg"
            src="https://fitmealsprep.com/wp-content/uploads/2023/08/Fit-Meals-Prep_Top-Reasons-Why-Using-Fresh-Ingredients-Really-Matters.jpg"
            alt=""
            />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="write-form-group">
                    <textarea placeholder="Insert Description Here:" type="text" className="writeInput"></textarea>
                    <textarea placeholder="Insert Ingredients Here:" type="text" className="writeInput"></textarea>
                </div>
                <button className="writeSubmit">
                    Publish Recipe
                </button>
            </form>
        </div>
    )
}