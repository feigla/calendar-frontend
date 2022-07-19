import React, {FC} from 'react';
import {privateRoutes, publicRoutes} from "./index";
import {Route, Routes} from "react-router-dom";
import Calendar from "../pages/Calendar/Calendar";
import {useAppSelector} from "../hooks/redux";

const AppRoutes: FC = () => {
    const {isAuth} = useAppSelector(state => state.authReducer)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.component/>} key={route.path}/>
                )}
                <Route path='/*' element={<Calendar/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.component/>} key={route.path}/>
                )}
            </Routes>
    );
};

export default AppRoutes;