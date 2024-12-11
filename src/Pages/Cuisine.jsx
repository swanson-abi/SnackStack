import React, { useEffect, useState } from 'react';
import Category from '../Components/Category';
import { styled } from "styled-components";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }
    useEffect(() => {
        getCuisine(params.type)
    }, [params.type]);

    return (
        <div>
            <Category />
            <Grid>
                {cuisine?.map((item) => (
                    <Card key={item.id}>
                        <Link to={`/recipe/${item.id}`}>
                        <img
                        src={item.image}
                        alt=""/>
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                ))}
            </Grid>
        </div>
    )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
img{
    width: 100%;
    border-radius: 2rem;
}

a {
    text-decoration: none;
}

hr {
    text-align: center;
    padding: 1rem;
}

h4 {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: black;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;

export default Cuisine;
