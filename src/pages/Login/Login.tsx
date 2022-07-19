import React, {FC, useState} from 'react';
import classes from './Login.module.css'
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";

const Login: FC = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isRegistered, setRegistered] = useState<boolean>(false)

    const {isLoading, error} = useAppSelector(state => state.authReducer)
    const {login, registration} = useActions()

    function changeAuth(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        isRegistered ? registration(name, password) : login(name, password)
    }

    if (isLoading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className={classes.wrapper}>
            <form className={classes.form__login}>
                <MyInput
                    type='name'
                    placeholder='username'
                    required
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <MyInput
                    type='password'
                    placeholder='password'
                    required
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <div className={classes.register}>
                    <div className={classes.register_form} onClick={() => {
                        setName('')
                        setPassword('')
                        setRegistered(!isRegistered)}
                    }>
                    {isRegistered
                        ? <a>Login</a>
                        : <a>Registration</a>
                    }
                    </div>
                    <MyButton onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeAuth(e)}>
                        Submit
                    </MyButton>
                </div>
            </form>
        </div>
    );
};

export default Login;