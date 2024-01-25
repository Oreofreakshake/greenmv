import React from 'react';
import Image from "next/image";
import MaldivesImage from '../assets/maldivesislands.jpg';

export default function Header() {
    return (
        <section 
            className="bg-white bg-opacity-60 relative" 
            style={{ 
                backgroundImage: `url(${MaldivesImage})`, // Replace with the path to your image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div 
                className="mx-auto max-w-screen-xl py-12 lg:py-48"
                style={{ backdropFilter: 'blur(5px)' }} // Apply a blur effect to the content background for readability
            >
                <div className="font-poppins text-center">
                    <h1 className="text-6xl font-bold pb-10 text-gray-800">
                        Preserving the Beauty of the Maldives
                    </h1>
                    <p className="text-xl text-gray-700">
                        Join us in our mission to maintain a clean and sustainable environment.
                    </p>
                </div>
            </div>
        </section>
    );
}
