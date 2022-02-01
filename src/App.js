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
                    Content
                </div>
                {/* <!-- /End replace --> */}
            </div>
        </main>
    </div>);
}

export default App;
