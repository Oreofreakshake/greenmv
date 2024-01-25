import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Alert from './alert'; // Ensure this is the correct path to your Alert component

interface FormData {
    name: string;
    contact: string;
    issue: string;
    location: string;
    category: string;
}

export default function Form() {
    const [submitData, setSubmitData] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [data, setData] = useState<FormData>({
        name: "",
        contact: "",
        issue: "",
        location: "",
        category: "",
    });

    const categories = [
        "Animals", "Dockless Vehicles", "Garbage/Dumping", "Graffiti", 
        "Housing repair without permits", "Illegal Garage Sale", "Parking", 
        "Permits", "Pothole/Street Repair", "Property Maintenance", "Sidewalk repair"
    ].sort();

    const buttonClick = () => {
        
        // Object.keys(data).forEach(key => {
        //     const value = data[key as keyof FormData];
        //     if (key === 'photo') {
        //         // Append photo only if it's not null
        //         if (value instanceof File) {
        //             formData.append(key, value);
        //         }
        //     } else {
        //         // Assuming all other values are strings
        //         formData.append(key, value as string);
        //     }
        // });
    
        axios
            .post("http://localhost:3010/api/data", data)
            .then(() => {
                setSubmitData(true);
                setData({
                    name: "",
                    contact: "",
                    issue: "",
                    location: "",
                    category: "",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    

    // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     buttonClick();
    // };



    const InputChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setData(prevState => ({ ...prevState, photo: event.target.files[0] }));
        } else {
            // Optionally handle the case where no file is selected.
            // This else block can be omitted if there's no need to react to this scenario.
            setData(prevState => ({ ...prevState, photo: null }));
        }
    };
    
    

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const formClass = darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700";
    const inputClass = darkMode ? "bg-gray-700 border-gray-600" : "border-gray-300";
    const buttonClass = darkMode ? "bg-purple-500 hover:bg-purple-600" : "bg-indigo-600 hover:bg-indigo-700";

    return (
        <section className={`${formClass} pt-12`}>
            <Alert show={submitData} handleClose={() => setSubmitData(false)} />
            
            <div className="flex justify-between p-4">
                <h2 className="text-lg font-bold">{darkMode ? 'Dark' : 'Light'} Mode Form</h2>
                <button 
                    onClick={toggleDarkMode} 
                    className={`rounded px-4 py-2 text-sm font-medium text-white ${buttonClass}`}
                >
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>

            <form className="p-4">
                {/* Name and Contact Fields */}
                <div className="flex gap-4 mb-4">
                    {/* Name Field */}
                    <div className="flex-1">
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            onChange={InputChange}
                            value={data.name}
                            className={`mt-1 block w-full rounded-md p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${inputClass}`}
                        />
                    </div>

                    {/* Contact Field */}
                    <div className="flex-1">
                        <label htmlFor="contact" className="block text-sm font-medium">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            required
                            placeholder="Enter your contact number"
                            onChange={InputChange}
                            value={data.contact}
                            className={`mt-1 block w-full rounded-md p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${inputClass}`}
                        />
                    </div>
                </div>

                {/* Location Field */}
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        required
                        placeholder="Enter the location"
                        onChange={InputChange}
                        value={data.location}
                        className={`mt-1 block w-full rounded-md p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${inputClass}`}
                    />
                </div>

                {/* Category Dropdown */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium">Category</label>
                    <select
                        name="category"
                        required
                        onChange={InputChange}
                        value={data.category}
                        className={`mt-1 block w-full rounded-md p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${inputClass}`}
                    >
                        <option disabled value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                {/* Issue TextArea */}
                <div className="mb-4">
                    <label htmlFor="issue" className="block text-sm font-medium">Issue</label>
                    <textarea
                        name="issue"
                        rows={4}
                        required
                        placeholder="Describe the issue"
                        onChange={InputChange}
                        value={data.issue}
                        className={`mt-1 block w-full rounded-md p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${inputClass}`}
                    ></textarea>
                </div>

                {/* Photo Upload */}
                {/* <div className="mb-4">
                    <label htmlFor="photo" className="block text-sm font-medium">Photo of the Issue</label>
                    <input
                        type="file"
                        name="photo"
                        onChange={handlePhotoChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                </div> */}

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        onClick={buttonClick}
                        type="button"
                        className={`rounded px-4 py-2 text-sm font-medium text-white ${buttonClass}`}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
