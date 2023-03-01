import React from 'react'
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useLogin } from "../Login";
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

const LoginPage = () => {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error} = useLogin();

    // const dispatch = useDispatch();

    let navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        console.log("trying to submit");
        // const data = await Login(userName, password);
        // if (data.error) {
        //     setError(JSON.parse(data.error))
        // } else {
        //     <Navigate to='/homepage' />
        // }
        // let user = { username: userName, password: password }
        // localStorage.setItem('user', JSON.stringify(user));
        // console.log(localStorage.getItem('user'));
        await login(userName, password)
        if (isLoading || error) {
            console.log("**error message: ", error.message)
        } else {
            navigate("/homepage")
        }
        return
    };

    return (
        <main>
            <section>
                <div className="loginContainer">
                    <form onSubmit={onLogin}>
                        <div>
                            <span>Username</span>
                            <input
                                id="userName"
                                className="login-form-fields"
                                name="userName"
                                type="text"
                                value={userName}
                                required
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <input
                                id="password"
                                className="login-form-fields"
                                name="password"
                                type="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                        {error ?
                            (<div>
                                {error}
                            </div>)
                            :
                            null
                        }
                    </form>
                </div>
            </section>
        </main>
    );
};

export default LoginPage;
