import React, { } from 'react';
import { useLoaderData } from 'react-router';
import ShowApps from '../../components/ShowApps/ShowApps';

const ShowAllApps = () => {
    const appsData = useLoaderData();


    const lengthD = appsData.length;


    return (
        <div>
            <section class="bg-gray-50 py-10 px-6">
                <div class="max-w-6xl mx-auto">

                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-900">Our All Applications</h2>
                        <p class="text-gray-500 mt-2">
                            Explore All Apps on the Market developed by us. We code for Millions
                        </p>
                    </div>


                    <div class="flex flex-col md:flex-row justify-between items-center mb-6">

                        <p class="text-gray-800 font-semibold text-lg">

                            <span class="font-bold">({lengthD}) Apps Found</span>
                        </p>


                        <div class="relative mt-3 md:mt-0">
                            <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="search Apps"
                                class="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none w-64"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='grid grid-cols-4 gap-2 m-10 p-3'>
                {
                    appsData.map((appData) => (
                        <ShowApps key={appData.id} appData={appData}></ShowApps>
                    ))}
            </div>

        </div>
    );
};

export default ShowAllApps;