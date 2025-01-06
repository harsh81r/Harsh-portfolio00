
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Home.css'; // Import the CSS file for animations

function Home() {
    const [visibleTextIndex, setVisibleTextIndex] = useState(0);
    const textArray = [
        "Proficient MERN Stack Developer specializing in designing and implementing robust, scalable web applications.",
        "Expertise in MongoDB, Express.js, React.js, and Node.js.",
        "Strong focus on creating seamless user experiences.",
        "Efficient, full-stack solutions for modern businesses."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleTextIndex((prevIndex) => {
                if (prevIndex < textArray.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    return prevIndex; // Stop incrementing after the last text
                }
            });
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient min-h-screen flex items-center'>
            <div className="mx-auto w-full max-w-7xl">
                <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-10">
                    <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-5 sm:py-16 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                            <img
                                src="./myph.jpg"
                                className="h-32 rounded-3xl ml-20  border-blue-500  text-center"
                                alt="Logo"
                            />
                            <h2 className="text-2xl font-bold sm:text-3xl    ">
                                <span  className=''>👋</span>  Hii I'm Harsh
                            </h2>
                            <h3 className='font-bold mt-5 text-lg sm:text-2xl transition-transform duration-500 transform hover:scale-105'>
                                {textArray.map((text, index) => (
                                    <span key={index} className={`block transition-opacity duration-500 ${index <= visibleTextIndex ? 'opacity-100' : 'opacity-0'}`}>
                                        {text}
                                    </span>
                                ))}
                            </h3>
                            <span className="hidden sm:block text-4xl">MERN Stack Developer</span>
                            <Link
                                to="/about" // Link to the About page
                                className=" animate-pulse bg-black inline-flex text-yellow-400 items-center px-6 py-3 font-bold rounded-lg  hover:opacity-75"
                            >
                                Go to About Page
                            </Link>
                        </div>
                    </div>
                </aside>

                <div className=" border-x-transparent bg-slate-50 grid place-items-center sm:mt-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Technologies I've Worked With</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./python.svg'} alt="Python" className="h-16 w-16 animate-spin " />
                            <span className="mt-2 font-bold">Python</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./tailwind-css.svg'} alt="Tailwind CSS" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold ">Tailwind CSS</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./firebase.svg'} alt="Firebase" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">Firebase</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./c++ file.png'} alt="C++" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">C++</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./javascript.png'} alt="JavaScript" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./html.svg'} alt="HTML" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">HTML</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./react.svg'} alt="React" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">React</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./Express-js.png'} alt="Express" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">Express</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./mongodb.svg'} alt="MongoDB" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">MongoDB</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                            <img src={'./nodejs.svg'} alt="Node" className="h-16 w-16 animate-bounce" />
                            <span className="mt-2 font-bold">Node</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
            </div>
        </div>
    );
}

export default Home;
