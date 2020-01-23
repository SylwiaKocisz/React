import React from "react";
import Search from "../Search/Search";
import Title from "../Title/Title";
import Container from "../Container/Container"

const CatalogPage = () => {
    return (
        <Container>
            <Title text="Catalog" />
            <Search />
        </Container>
    );
};
export default CatalogPage;