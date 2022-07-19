import React from "react";
import Login from "../pages/Login/Login";
import Calendar from "../pages/Calendar/Calendar";

export interface IRoute {
    path: string
    component: React.ComponentType
}

export enum NameRoutes {
    LOGIN = '/login',
    CALENDAR = '/'
}

export const publicRoutes: IRoute[] = [
    {path: NameRoutes.LOGIN, component: Login},
]

export const privateRoutes: IRoute[] = [
    {path: NameRoutes.CALENDAR, component: Calendar}
]

