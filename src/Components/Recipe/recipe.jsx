import React from 'react';
import { styled } from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Recipe({recipe}) {
  const location = useLocation();
  console.log(location);
    return (
      <div>
          <Wrapper>
              <Splide options={{
                  perPage: 4,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  gap: "5rem",
              }}>
                  {recipe?.map((r) => (
                      <SplideSlide key={r.id}>
                          <Card>
                              <Link to={`/recipe/${r.id}`}>
                              <p>{r.title}</p>
                              <img src={r.image} alt={r.title} />
                              <Gradient />
                              </Link>
                          </Card>
                      </SplideSlide>
                  ))}
              </Splide>
          </Wrapper>
      </div>
  );
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
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

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`;

export default Recipe;
