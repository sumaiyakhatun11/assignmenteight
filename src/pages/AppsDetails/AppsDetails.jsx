import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToStoredDB, getStoredApp } from '../../components/Utility/Database'

const AppsDetails = () => {
    const { id } = useParams()
    const appId = parseInt(id);

    const appsData = useLoaderData()

    const app = appsData.find((a) => a.id === parseInt(id));

    const { title, image, companyName, downloads, ratingAvg, reviews, description, ratings } = app;

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const storedApps = getStoredApp().map(Number);
        if (storedApps.includes(appId)) {
            setInstalled(true);
        }
    }, [appId]);

    const handleInstall = () => {

        toast.success(`${title} installed successfully!`, {
            position: "top-center",
            autoClose: 2000,
        });
        addToStoredDB(appId);
        setInstalled(true);
    };

    const sortedRatings = [...(ratings || []).sort((a, b) => parseInt(b.name) - parseInt(a.name))]
    return (
        <div>
            <div class="flex items-center bg-white shadow-md rounded-lg p-4 w-[520px]">

                <div class="w-20 h-20 flex-shrink-0">
                    <img src={image} alt="" />
                </div>


                <div class="ml-4 flex flex-col w-full">
                    <h2 class="text-lg font-semibold text-gray-800">{title}</h2>
                    <p class="text-sm text-gray-500">Developed by <a href="#" class="text-blue-600 hover:underline">{companyName}</a></p>


                    <div class="flex items-center gap-6 mt-3 text-sm">
                        <div>
                            <p class="text-gray-500">{downloads}</p>
                            <p class="font-semibold text-gray-800">8M</p>
                        </div>

                        <div>
                            <p class="text-gray-500">{ratingAvg}</p>
                            <p class="font-semibold text-gray-800 flex items-center gap-1">
                                <span class="text-yellow-500 text-lg">★</span> 4.9
                            </p>
                        </div>

                        <div>
                            <p class="text-gray-500">{reviews}</p>
                            <p class="font-semibold text-gray-800">54K</p>
                        </div>
                    </div>


                    <button class="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md w-fit " disabled={installed} onClick={handleInstall}>
                        {installed ? "Installed" : "Install Now"}
                    </button>
                </div>
            </div>


            <div>
                <h2 className="text-lg font-semibold mb-4">Ratings</h2>

                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sortedRatings} layout="vertical" margin={{ right: 20 }}>
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF9600" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>


            </div>

            <div>
                <h1 className="font-bold mt-8">Description</h1>
                <p>{description}</p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default AppsDetails;