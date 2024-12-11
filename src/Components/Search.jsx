import { styled } from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
   <FormStyle>
    <div>
        <input type="text" placeholder="Search" /> <FaSearch/>
    </div>
</FormStyle>
  )
}
const FormStyle = styled.form`
margin: 0rem, 20rem;
position: relative;
div{
    width: 100%;
    position: relative;
}
input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    padding: 1rem 3rem;
    color: white;
    outline: none;
    border-radius: 1rem;
    width: 100%;
}

svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}
`;
export default Search
