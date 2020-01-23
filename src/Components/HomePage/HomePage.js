import React from "react";
import Title from "../Title/Title";
import Container from "../Container/Container";
import Recommended from "../Recommended/Recommended";
import Category from "../Category/Category"

const HomePage = () => (

    <Container>
        <Title text="Welcome to our store" />
        <Category text="Desktops" />
        <Recommended category={"desktop"} />
        <Category text="Tablets" />
        <Recommended category={"tablet"} />

    </Container>
);


export default HomePage; 