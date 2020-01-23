import React from "react";
import styles from "../../App.module.css";
import { NavLink } from 'react-router-dom';
import Container from "../Container/Container"

const Header = () => {
    const style = {
        fontWeight: 'bold'
    };
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.nav}>
                    <li><NavLink exact to="/" activeStyle={style}>Home</NavLink></li>
                    <li><NavLink to="/catalog" activeStyle={style}>Catalog</NavLink></li>
                    <li><NavLink to="/about" activeStyle={style}>About</NavLink></li>
                </ul>
            </Container>
        </nav>
    );
}
export default Header; 