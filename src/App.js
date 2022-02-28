import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                            <div
                                className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                    Utilisez
                                    <span className="text-indigo-600"> Xenodriver </span>
                                    Pour votre stockage
                                </h1>
                                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Notre site professionnel vous propose un service de stockage de vos photos de qualité a petit prix et sécurisé !</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="/register"><button
                                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Inscription
                                </button></a>
                                <a href="/offres"><button
                                    className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Nos Offres
                                </button></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>
        </div>);
}

export default App;
