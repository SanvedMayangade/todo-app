import React from "react";


function Cart(props) {

    return (
        <>
            <div className="flex flex-wrap justify-center max-w-full p-6">
                {/* Repeat this block for each image */}
                <div className=" skill_class shadow-lg transition duration-300 ease-in-out transform hover:scale-105 " >
                    <img
                        className="image_class"
                        src={props.image}
                        alt="Image"
                    />
                    <p className="image_name">{props.name}</p>
                </div>
                {/* End of image block */}
            </div>


        </>
    )
}



export default function Skills() {
    return (
        <>
            <div id ="skills" className="bg-dark">
                <div className="flex justify-center">
                    <h5 className="text-3xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105 underline decoration-green-500">
                        Skills
                    </h5>
                </div>

                <hr className=" p-2" style={{ borderTop: '1px solid black', margin: '10px' }} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-gray-100" id="skillsid">

                    <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-gIZPUEgx6kRc3g4Knv1I8iPR3fEM31kvJrfc9RhPgRdiRBX5Krhr-Sfb3mXTHotePY&usqp=CAU" name="Python"
                        alt="Card Image" />
                    <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjAZko2-7xQp9OrNn5C36L_B2MUAqc8FUFw&s" name="Django/DRF"
                        alt="Card Image" />
                    <Cart image="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" name="JavaScript"
                        alt="Card Image" />

                    <Cart image="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" name="React JS"
                        alt="Card Image" />
                    <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwUKzmsIrc92M9U9RjBF5XWYB6yJJGR_NQg&s" name="MySql"
                        alt="Card Image" />
                    <Cart image="https://cdn-icons-png.flaticon.com/512/174/174854.png" name="Html"
                        alt="Card Image" />
                    <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBJ8fz6KNK6Ut3df5khikEAXIkhoquFuFgw&s" name="css"
                        alt="Card Image" />

                    <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s" name="Bootstrap"
                        alt="Card Image" />
                </div>
            </div>



        </>
    )
}
