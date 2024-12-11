import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function RecipeDetail() {
    let params = useParams();
    const [details, setDetails] = useState();
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData.results);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.id]);

    return (
        <Wrapper>
            <div>
                <h2>{details?.title}</h2>
                <img src={details?.image} alt="" />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ""} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ""} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details?.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details?.instructions }}></h3>
                    </div>)}
                {activeTab === 'ingredients' && (
                    <ul>
                        {details?.extendedIngredients.map((indgredient) => (
                            <li key={indgredient.id}>{indgredient.original}</li>
                        ))}
                    </ul>
                )}

            </Info>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  margin-top: 10rem;
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  @media (max-width: 1068px) {
    flex-direction: column;
  }

  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.8rem;

    &:first-child {
      margin-top: 2rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;

  @media (max-width: 1068px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;


export default RecipeDetail
