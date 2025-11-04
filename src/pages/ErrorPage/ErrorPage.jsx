import React from 'react';
import { Link } from 'react-router';
import errorImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            {/* Illustration */}
            <div className="mb-8">
                <img
                    src={errorImage}
                    alt="Error Illustration"
                    className="mx-auto rounded-lg shadow-md"
                />
            </div>

            {/* Text */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Oops, page not found!
            </h1>
            <p className="text-gray-500 mb-8 text-center max-w-md">
                The page you are looking for is not available.
            </p>


            <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg shadow-md transition duration-200"
            >
                Go Back!
            </Link>
        </div>
    );
};

export default ErrorPage;