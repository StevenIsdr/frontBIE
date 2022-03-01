import './App.css';
import Navbar from "./Navbar";
import {useState} from "react";

function Login(){
    if(localStorage.getItem("token") != null){
        window.location.href = "http://localhost:3000/drive";
    }


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers:{'content-type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const response = await res.json()
            if (res.status === 200) {
                console.log("User log successfully");
                const token = JSON.stringify(response.token);
                localStorage.setItem("token", token);

                let getId = await fetch(`http://127.0.0.1:8000/api/users?username=${username}`, {
                    method: "GET",
                    headers: {
                        'Authorization': `bearer ${response.token}`
                    },
                    referrerPolicy: "origin-when-cross-origin",
                });
                const responseID = await getId.json()
                const user = JSON.stringify(responseID['hydra:member'][0]);
                localStorage.setItem("user", user);
                window.location.href = "http://localhost:3000/drive";

            } else {
                console.log("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="h-screen flex">
                <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center xs:block">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">XENODriver</h1>
                        <p className="text-white mt-1">Heberger facilement vos photos et vidéos !</p>
                        <a href="/register"><button className="block w-40 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Inscription</button></a>
                    </div>
                </div>
                <div className="flex w-1/2 justify-center items-center bg-white">
                    <form className="bg-white">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Bonjour,</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Vous connecter</p>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text"  value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="password"   value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Mot de passe" />
                        </div>
                        <button onClick={handleSubmit} className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Connexion</button>
                        <a href="/register" className="text-xs text-indigo-600">Pas de compte ? Inscrivez vous dès maintenant.</a>
                    </form>
                </div>
            </div>
        </div>);
}

export default Login;