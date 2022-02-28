import './App.css';
import Navbar from "./Navbar";
import {useState} from "react";

function Offres(){

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto pt-8 lg:w-3/5 mb-6'>
                <div className="w-full mx-auto bg-white px-5 py-10 mb-10">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-5 text-indigo-600">Nos Offres</h1>
                        <h3 className="text-xl font-medium mb-10">Voici les différentes offres que propose XenoDriver pour vos stockage de photos</h3>
                    </div>
                    <div className="max-w-4xl mx-auto md:flex">
                        <div
                            className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                            <div className="w-full flex-grow">
                                <h2 className="text-center font-bold uppercase mb-4 text-indigo-600">Gratuit</h2>
                                <h3 className="text-center font-bold text-4xl mb-5 text-indigo-600">0€/Mois</h3>
                                <ul className="text-sm px-5 mb-8">
                                    <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> 15Gb de stockage
                                    </li>
                                    <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Partage de Drive
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <a href="/register"><button
                                    className="font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-10 py-2 transition-colors w-full">Inscription
                                </button></a>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                            <div className="w-full flex-grow">
                                <h2 className="text-center font-bold uppercase mb-4 text-indigo-600">Premium</h2>
                                <h3 className="text-center font-bold text-4xl md:text-5xl mb-5 text-indigo-600">20€/Mois</h3>
                                <ul className="text-sm px-5 mb-8">
                                    <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> 200Gb de Stockage
                                    </li>
                                    <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Partage de compte
                                    </li>
                                    <li className="leading-tight"><i
                                        className="mdi mdi-check-bold text-lg"></i> Groupe
                                    </li>
                                    <li className="leading-tight"><i
                                        className="mdi mdi-check-bold text-lg"></i> Partage de photos
                                    </li>
                                    <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Filtrage Avancé
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <a href="/register"><button
                                    className="font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-10 py-2 transition-colors w-full">Inscription
                                </button></a>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                            <div className="w-full flex-grow">
                                <h2 className="text-center font-bold uppercase mb-4 text-indigo-600">Étudiant</h2>
                                <h3 className="text-center font-bold text-4xl mb-5 text-indigo-600">$5/Mois</h3>
                                <ul className="text-sm px-5 mb-8">
                                    <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> 200Gb de Stockage
                                    </li>
                                    <li className="leading-tight"><i
                                        className="mdi mdi-check-bold text-lg"></i> Groupe
                                    </li>
                                    <li className="leading-tight"><i
                                        className="mdi mdi-check-bold text-lg"></i> Partage de photos
                                    </li>
                                    <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Filtrage Avancé
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <a href="/register"><button
                                    className="font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-10 py-2 transition-colors w-full">Inscription
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Offres;