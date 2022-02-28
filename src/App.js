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
                        <div className="container mx-auto flex flex-col items-center pt-12 sm:pt-24">
                            <div
                                className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                    Utilisez
                                    <span className="text-indigo-600"> Xenodriver </span>
                                    Pour votre stockage
                                </h1>
                                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-700 font-normal text-center text-sm sm:text-lg">Notre site professionnel vous propose un service de stockage de vos photos de qualité a petit prix et sécurisé !</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="/register"><button
                                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded-xl text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Inscription
                                </button></a>
                                <a href="/offres"><button
                                    className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded-xl border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Nos Offres
                                </button></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>

            <section className="max-w-8xl mx-auto container bg-white pt-6">
                <div>
                    <div role="contentinfo" className="flex items-center flex-col px-4">
                        <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">Nos Services</p>
                        <hh1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Service professionnel &amp; sécurisé pour vos photos</hh1>
                    </div>
                    <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Stockage de qualité</h2>
                                <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Xenodriver propose un service de stockage sécurisé pour que vous puissiez avoir un endroit pour stocker vos photos.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Interface intuitive et de qualité</h2>
                                <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Nous proposons une interface complète et simple d'utlisation pour le traitement et le stockage de vos images.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Sécurisé et souvent mis a jour</h2>
                                <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Notre équipe fait en sorte de vous proposer un service toujours fonctionnel et sécurisé pour vos stockage privés.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Utilisable sur mobile et ordinateur</h2>
                                <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Xenodriver a aussi été pensé pour une utiliation sur mobile ainsi que sur ordinateur pour pourvoir traiter vos images.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>);
}

export default App;
