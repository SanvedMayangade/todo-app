import React from "react";
import DownloadResume from "./Resume";

export default function Home() {

    return (
        <>
            <div id="home" className="bg-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col sm:flex-row mb-6">
                {/* Left Side - Image */}
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img
                        className="object-cover rounded-full  w-38 h-37 bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"  // Set both width and height to w-32 and h-32
                        src="https://wallpapers.com/images/hd/cricket-playerin-blue-jersey-p1adsd6qz2qqp062-p1adsd6qz2qqp062.png"
                        alt="Card Image"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="w-full sm:w-1/2 p-4 bg-gray-100">
                    {/* <h5 className="text-4xl font-bold text-gray-900 dark:text-white"> 👋 Welcome to My Portfolio!!</h5> */}
                    <h5 className="text-4xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105 underline decoration-green-500">About me </h5>

                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">I'm Sanved Mayangade</p>
                    <p className="text-gray-700 dark:text-gray-400 mt-2">As a passionate Web Developer with expertise in Python, JavaScript, Django, Django Rest Framework, React.js, HTML5, CSS3, and MySQL, I strive to craft dynamic and user-friendly web applications. My proficiency in backend development using Django ensures robust, scalable server-side solutions, while my frontend expertise with React.js allows me to create interactive and seamless user experiences. I specialize in building powerful APIs with Django Rest Framework, facilitating smooth communication between the frontend and backend. Additionally, my knowledge of MySQL enables me to design and optimize databases to ensure data integrity and efficiency. I'm committed to delivering high-quality, performance-driven applications, and always eager to collaborate on innovative projects. Let's work together to transform your ideas into reality!</p>
                <DownloadResume />

                </div>


            </div>


        </>
    )
}