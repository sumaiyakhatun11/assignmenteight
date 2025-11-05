import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromStoredDB } from '../../components/Utility/Database';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);
    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredApp = storedAppData.map(id => parseInt(id));
        const myInstallation = data.filter(app => ConvertedStoredApp.includes(app.id));
        setInstallation(myInstallation);
    }, [data]);

    const handleUninstall = (appId, appTitle) => {
        const updatedInstallation = installation.filter(app => app.id !== appId);
        setInstallation(updatedInstallation);
        removeFromStoredDB(appId);
        toast.success(`${appTitle} has been uninstalled!`, {
            position: "top-center",
            autoClose: 2000,
        });
    };

    const handleSort = (order) => {
        setSortOrder(order);
        const sortedApps = [...installation].sort((a, b) => {
            if (order === 'asc') return a.downloads - b.downloads;
            if (order === 'desc') return b.downloads - a.downloads;
            return 0;
        });
        setInstallation(sortedApps);
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 border border-dashed border-blue-300 p-6 rounded-lg">
            <div className="text-center border border-dashed border-blue-300 p-4 mb-6">
                <h1 className="text-2xl font-bold">Your Installed Apps</h1>
                <p className="text-gray-500 text-sm">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-between items-center mb-4 border border-dashed border-blue-300 p-3">
                <h2 className="text-lg font-semibold">{installation.length} Apps Found</h2>
                <select
                    className="border rounded px-3 py-1 text-gray-600 text-sm"
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option>Sort By Size</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

            <div className="space-y-3">
                {installation.length > 0 ? (
                    installation.map(app => (
                        <div
                            key={app.id}
                            className="flex justify-between items-center border border-dashed border-blue-300 rounded-lg px-4 py-3 bg-white"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-12 h-12 bg-gray-200 rounded object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">{app.title}</h3>
                                    <div className="flex gap-4 text-sm text-gray-600 mt-1">
                                        <p>🟢 {app.downloads}</p>
                                        <p>⭐ {app.ratingAvg}</p>
                                        <p>{app.size} MB</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id, app.title)}
                                className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-10">
                        You haven’t installed any apps yet.
                    </p>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Installation;
