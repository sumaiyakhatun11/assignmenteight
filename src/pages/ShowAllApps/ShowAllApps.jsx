import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ShowApps from '../../components/ShowApps/ShowApps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowAllApps = () => {
    const appsData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter apps based on search term
    const filteredApps = appsData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle search input
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // If nothing matches, show toast once
        if (value.trim() !== '' && filteredApps.length === 0) {
            toast.error('No apps found!', {
                position: "top-center",
                autoClose: 2000,
            });

        }



    };

    return (
        <div>
            <section className="bg-gray-50 py-10 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Our All Applications</h2>
                        <p className="text-gray-500 mt-2">
                            Explore All Apps on the Market developed by us. We code for Millions
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <p className="text-gray-800 font-semibold text-lg">
                            <span className="font-bold">({filteredApps.length}) Apps Found</span>
                        </p>

                        <div className="relative mt-3 md:mt-0">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search Apps"
                                value={searchTerm}
                                onChange={handleSearch}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none w-64"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10 p-3'>
                {filteredApps.length > 0 ? (
                    filteredApps.map((appData) => (
                        <ShowApps key={appData.id} appData={appData} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-10 col-span-4">No apps found</p>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default ShowAllApps;
