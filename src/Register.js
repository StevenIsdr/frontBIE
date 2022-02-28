import './App.css';
import Navbar from "./Navbar";
import {useState} from "react";

function Register(){
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [username, setUsername] = useState("");
    const [motdepasse, setMdp] = useState("");
    const [offre, setOffre] = useState("/api/offers/1");
    const [email, setEmail] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try { let res = await fetch("http://127.0.0.1:8000/api/users", {
            method: "POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({
                lastName: nom,
                firstName: prenom,
                username: username,
                password: motdepasse,
                email: email,
                offers: offre
            }),
        });
            if (res.status === 201) {
                window.location.href = "http://localhost:3000/login";
                console.log("User created successfully");
            } else {
                console.log("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div>
            <Navbar/>

            <div className="h-screen flex">
                <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">XENODriver</h1>
                        <p className="text-white mt-1">Heberger facilement vos photos et vidéos !</p>
                        <a href="/login"><button className="block w-40 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Connection</button></a>
                    </div>
                </div>
                <div className="flex w-1/2 justify-center items-center bg-white">
                    <form className="bg-white" onSubmit={handleSubmit}>
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Bonjour,</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Inscription</p>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                      clipRule="evenodd"/>
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                      clipRule="evenodd"/>
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
                        </div>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse Mail" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="password" value={motdepasse} onChange={(e) => setMdp(e.target.value)} placeholder="Mot de passe" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z"
                                      clipRule="evenodd"/>
                            </svg>
                            <select name="offer" id="offer-select" value={offre} onChange={(e) => setOffre(e.target.value)}>
                                <option key="1" value="/api/offers/1">5Gb - Gratuit</option>
                                <option key="2" value="/api/offers/2">100Gb - 5€</option>
                                <option key="3" value="/api/offers/3">1Tb - 25€</option>
                            </select>
                        </div>
                        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Inscription</button>
                        <a href="/login" className="text-xs text-indigo-600">Vous possèdez un compte ? Connection</a>
                    </form>
                </div>
            </div>
        </div>);
}

export default Register;