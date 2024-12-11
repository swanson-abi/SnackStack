import { Link } from "react-router-dom";
import "./singlerecipe.css";

export default function SingleRecipe() {
    return (
            <div className="singlerecipe">
                <div className="singlerecipeWrapper">
                    <img
                        className="singlerecipeImg"
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <h1 className="singlerecipeTitle">
                        Single Recipe Title
                        <div className="singlerecipeEdit">
                            <i className="singlerecipeIcon far fa-edit"></i>
                            <i className="singlerecipeIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singlerecipeInfo">
                        <span>
                            Author:
                            <b className="singlerecipeAuthor">
                                <Link className="link" to="/recipes?username=Abbey">
                                   Abbey
                                </Link>
                            </b>
                        </span>
                        <span>1 day ago</span>
                    </div>
                    <p className="singlerecipeDesc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                        a odit modi eos!
                        <br />
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                        a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
    );
}