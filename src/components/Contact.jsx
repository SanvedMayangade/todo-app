import React, { useState } from 'react';

const ContactForm = () => {
    // Define state for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission logic (e.g., sending the data to an API or server)
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className="w-full p-6 flex flex-col bg-gray-100">
                <div className="w-full bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-12 mx-auto">
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2">
                        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2> */}
                        <h2 className="text-2xl font-semibold text-center text-gray-800 ">Get in Touch</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Testimonials Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Website</h2>
                        <div className="space-y-4">
                            <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded">
                                <h3 className="text-lg font-semibold text-gray-800">Built with Modern Technologies</h3>
                                <p className="text-gray-700">This website is designed using the latest web technologies, including React, Tailwind CSS, and modern development practices.</p>
                            </div>
                            <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded">
                                <h3 className="text-lg font-semibold text-gray-800">Fully Responsive & Optimized</h3>
                                <p className="text-gray-700">It adapts seamlessly to different screen sizes, ensuring a smooth user experience on desktops, tablets, and mobile devices.</p>
                            </div>
                            <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded">
                                <h3 className="text-lg font-semibold text-gray-800">A Showcase of My Skills</h3>
                                <p className="text-gray-700">This portfolio serves as both my personal project and a demonstration of my ability to build sleek, functional websites.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
};

function Contat_me() {
    return (
        <>
            <section className="bg-gray-100 py-16" id="contact">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Email Section */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Email</h3>
                            <p className="text-gray-600">youremail@example.com</p>
                        </div>

                        {/* Mobile Section */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Mobile</h3>
                            <p className="text-gray-600">+123 456 7890</p>
                        </div>

                        {/* Location Section */}
                        <div className="flex flex-col items-center md:col-span-2">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Location</h3>
                            <p className="text-gray-600">1234 Street Name, City, Country</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a href="mailto:youremail@example.com" className="text-blue-500 hover:text-blue-700 text-lg">Email Me</a>
                        <p className="mt-4">Feel free to reach out via email or phone for any inquiries.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default function Contact() {
    return (
        <>

            <div id ="contact" className="flex justify-center mt-6 mb-2">
                <h5 className="text-3xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105 underline decoration-green-500">
                    Contact Me
                </h5>
            </div>
            <hr className=" p-2" style={{ borderTop: '1px solid black', margin: '10px' }} />

            <ContactForm />

        </>
    )
}
