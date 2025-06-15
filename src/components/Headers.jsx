// import {react} from "react"
// import { useState } from "react"

// export default function Headers(){
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>

//         <div className="headers_div">
//             {/* <span>Home</span>
//             <span>Skills</span>
//             <span>Resume</span>
//             <span>Contact</span> */}
// <nav className="bg-white dark:bg-gray-700">
//   <div className="max-w-screen-xl px-4 py-3 mx-auto lg:flex items-center justify-between ">
//     <div className="flex items-center justify-between">
//       <a href="#" className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/004/467/266/non_2x/portfolio-sketch-neon-icon-simple-thin-line-outline-of-education-icons-for-ui-and-ux-website-or-mobile-application-isolated-on-brick-wall-vector.jpg"
//           alt="Logo"
//           width={"40px"}
//           height={"40px"}
//           style={{ display: "inline", marginRight: "8px" }}
//         />
//         Sanved Mayangade
//       </a>
      
//       <button
//         className="lg:hidden text-gray-900 dark:text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>
//     </div>
    
//     {/* Update the classes for the navigation */}
//     <ul
//       className={`lg:flex lg:space-x-8 mt-0 font-medium text-xl space-y-4 lg:space-y-0 ${
//         isOpen ? "block" : "hidden"
//       } lg:block`}  // Ensure `lg:block` is here for large screens
//     >
//       <li>
//         <a href="ome" className="text-xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105" aria-current="page">
//           Home
//         </a>
//       </li>
//       <li>
//         <a href="Skills" className="text-xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
//           Skills
//         </a>
//       </li>
//       <li>
//         <a href="#" className="text-xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
//           Resume
//         </a>
//       </li>
//       <li>
//         <a href="Contact" className="text-xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
//           Contact
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>



//         </div>

//         </>
//     )

// }



import { useState } from "react";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-700 shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          
          {/* Logo + Hamburger */}
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition transform hover:scale-105"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/467/266/non_2x/portfolio-sketch-neon-icon-simple-thin-line-outline-of-education-icons-for-ui-and-ux-website-or-mobile-application-isolated-on-brick-wall-vector.jpg"
                alt="Logo"
                width="40"
                height="40"
                className="inline mr-2"
              />
              Sanved Mayangade
            </a>
            <button
              className="lg:hidden text-gray-900 dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`mt-4 lg:mt-0 transition-all duration-300 ease-in-out 
              ${isOpen ? "block" : "hidden"} lg:flex 
              flex-col lg:flex-row 
              space-y-4 lg:space-y-0 lg:space-x-8 
              font-medium text-xl`}
          >
            {["home", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="block text-gray-900 dark:text-white hover:text-orange-500 transition transform hover:scale-105"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

