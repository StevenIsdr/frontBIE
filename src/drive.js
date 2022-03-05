import './App.css';
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import {render} from "react-dom";


const ModalDrive = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="fixed top-0 left-0 overflow-hidden z-50 bg-gray-900/75 h-full w-full">
            <div className="absolute text-white top-5 right-5 cursor-pointer" onClick={() => props.setShow(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"/>
                </svg>
            </div>
            <div className="flex flex-wrap mt-6 h-screen items-center">
                <div className=" w-full lg:w-2/3">
                    <img className="rounded-2xl mx-auto h-1/2 w-auto mb-2"
                         src={props.img.path}/>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="lg:w-5/6 lg:pl-4 lg:mt-0 w-full mt-6" id="scroll">
                        <div className="bg-white border p-5 rounded shadow-xl mb-8">
                            <h2 className="text-2xl font-medium text-gray-800">A Propos</h2>
                            <p className="text-m font-light text-gray-600 my-3">
                                Date de création : {new Date(props.img.created).toLocaleDateString("fr")}
                            </p>
                            <p className="text-m font-light text-gray-600 my-3">
                                Nom de l'image : {props.img.name}
                            </p>
                            <a className="flex flex-wrap text-indigo-600 cursor-pointer mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

function Drive() {
    if (localStorage.getItem("token") == null) {
        window.location.href = "http://localhost:3000/login";
    }


    const [show, setShow] = useState(false)
    const [dateValue, setDateValue] = useState(false)
    const [file, setFile] = useState("")
    const [fileSelected, setFileSelected] = useState("")

    const loadFile = async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        const user = JSON.parse(localStorage.getItem("user"))
        let res = await fetch(`http://127.0.0.1:8000/api/files?user=${user.id}`, {
            method: "GET",
            headers: {
                'Authorization': `bearer ${token}`
            },
            referrerPolicy: "origin-when-cross-origin"
        });
        const response = await res.json()
        setFile(response['hydra:member'])
    }

    useEffect(() => {
        loadFile()
    }, []);

    function getBase64(file) {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    async function createImg(img) {
        const token = JSON.parse(localStorage.getItem("token"))
        const user = JSON.parse(localStorage.getItem("user"))
        console.log(img.target.files[0])
        const file = await getBase64(img.target.files[0])
        console.log(file)
        let res = await fetch(`http://127.0.0.1:8000/api/file/upload`, {
            method: "POST",
            body: JSON.stringify({
                'image': file,
                'user': user,
                'nameFile': img.target.files[0].name
            }),
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            // referrerPolicy: "origin-when-cross-origin"
        });
        await loadFile()
    }

    return (
        <div>
            <Navbar/>
            <div className='w-11/12 mx-auto pt-8 lg:w-3/5 mb-6'>
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">Mon drive</h2>
                </div>
                <div className="my-2 flex sm:flex-row flex-col pb-4">
                    <input id={"fileUpload"} type={"file"} className={"hidden"} onChange={(event) => createImg(event)}/>
                    <label htmlFor={'fileUpload'}
                           className="rounded-full cursor-pointer bg-indigo-600 px-2 text-white font-bold mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-1" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                            <path d="M9 13h2v5a1 1 0 11-2 0v-5z"/>
                        </svg>
                    </label>
                    <div className="flex flex-row mb-1 sm:mb-0">
                        <div className="relative">
                            <select
                                className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>?</option>
                                <option>?</option>
                                <option>?</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="relative">
                            <select
                                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>Croissant</option>
                                <option>Décroissant</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                        <input placeholder="Rechercher"
                               className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"/>
                    </div>
                </div>
                <div className="h-1 w-full border-b my-5 w-1/2"/>
                <div>
                    {
                        file && file.map(function (img, i) {
                            let newDate = false
                            let video = false
                            if (dateValue) {
                                if (dateValue !== img.created) {
                                    newDate = true
                                }
                            } else {
                                setDateValue(img.created)
                                newDate = true
                            }
                            if (img.path.startsWith("data:video")) {
                                video = true
                            }
                            return (
                                <div key={i}>
                                    {newDate &&
                                    <>
                                        <p className="text-2xl font-bold pt-4">{new Date(img.created).toLocaleDateString("fr")}</p>
                                        <div className="h-1 w-full border-b my-5 w-1/2"/>
                                    </>
                                    }
                                    {video &&
                                    <>
                                        <video controls width="500">
                                        <source key={i} className="rounded-2xl h-48 w-auto mr-2 mb-2 cursor-pointer"
                                             src={img.path} type={"video/mp4"}/>
                                        </video>
                                    </>
                                    }
                                    {!video && <img key={i} onClick={() => {
                                        setFileSelected(img)
                                        setShow(true)
                                    }} className="rounded-2xl h-48 w-auto mr-2 mb-2 cursor-pointer inline-block"
                                                    src={img.path} alt={""}/>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <ModalDrive show={show} setShow={setShow} img={fileSelected}/>
        </div>
    );
}

export default Drive;