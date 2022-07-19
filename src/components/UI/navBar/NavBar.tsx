import React from 'react';
import classes from './NavBar.module.css'
import {useAppSelector} from "../../../hooks/redux";
import {useActions} from "../../../hooks/useActions";

const NavBar = () => {
    const {isAuth} = useAppSelector(state => state.authReducer)
    const {logout} = useActions()
    return (
        <nav className={classes.block__auth}>
            {isAuth
                ?
                <>
                    <ul onClick={() => logout()}>Logout</ul>
                </>
                :
                <ul>
                    Login
                </ul>
            }
        </nav>
    );
};

export default NavBar;