import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToStoredDB, getStoredApp } from '../../components/Utility/Database';

const AppsDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const appsData = useLoaderData();

    const [loading, setLoading] = useState(true);
    const [installed, setInstalled] = useState(false);
    const [app, setApp] = useState(null);

    useEffect(() => {
        // Simulate fetching or processing delay
        const timer = setTimeout(() => {
            if (appsData && appsData.length > 0) {
                const foundApp = appsData.find((a) => a.id === appId);
                setApp(foundApp);
                setLoading(false);

            }

        }, 500)

        return () => clearTimeout(timer);

    }, [appsData, appId]);

    useEffect(() => {
        const storedApps = getStoredApp().map(Number);
        if (storedApps.includes(appId)) {
            setInstalled(true);
        }
    }, [appId]);

    const handleInstall = () => {
        toast.success(`${app.title} installed successfully!`, {
            position: "top-center",
            autoClose: 2000,
        });
        addToStoredDB(appId);
        setInstalled(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
                <p className="ml-3 text-gray-600 font-medium">Loading...</p>
            </div>
        );
    }

    if (!app) {
        return <p className="text-center text-red-500 mt-8">App not found.</p>;
    }

    const { title, image, companyName, downloads, ratingAvg, reviews, description, ratings } = app;
    const sortedRatings = [...(ratings || []).sort((a, b) => parseInt(b.name) - parseInt(a.name))];

    return (
        <div>
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-[520px]">
                <div className="w-20 h-20 flex-shrink-0">
                    <img src={image} alt={title} />
                </div>
                <div className="ml-4 flex flex-col w-full">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">
                        Developed by <a href="#" className="text-blue-600 hover:underline">{companyName}</a>
                    </p>
                    <div className="flex items-center gap-6 mt-3 text-sm">
                        <div>
                            <p className="text-gray-500">Downloads</p>
                            <p className="font-semibold text-gray-800">{downloads}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Rating</p>
                            <p className="font-semibold text-gray-800 flex items-center gap-1">
                                <span className="text-yellow-500 text-lg">★</span> {ratingAvg}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-500">Reviews</p>
                            <p className="font-semibold text-gray-800">{reviews}</p>
                        </div>
                    </div>
                    <button
                        className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md w-fit"
                        disabled={installed}
                        onClick={handleInstall}
                    >
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
