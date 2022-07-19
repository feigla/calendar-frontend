import React, {useEffect} from 'react';
import './styles/Zero.css'
import './styles/App.css'
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/UI/navBar/NavBar";
import {useActions} from "./hooks/useActions";

const App = () => {
    const {checkAuth} = useActions()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    return (
        <>
            <header>
                <div className='container'>
                    <NavBar/>
                </div>
            </header>
            <main>
                <div className='container'>
                    <AppRoutes/>
                </div>
            </main>
        </>
    );
};

export default App;