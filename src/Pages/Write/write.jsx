import "./write.css";
import React from "react";
export default function Write() {
    return (
        <div className="write">
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="file-input">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    </label>
                    <input type="file" id="file-input" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true}/>
                </div>
            </form>
        </div>
    )
}