import React from 'react';
import { FaDownload } from "react-icons/fa";

const ShowApps = ({ appData }) => {
    console.log(appData)

    const { title, image, reviews, ratingAvg, downloads, companyName, ratings, description } = appData || {};

    return (
        <div class="bg-white shadow-md rounded-xl p-3  hover:shadow-lg transition w-[280px] ">

            <div class="w-full  bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">

                <img src={image} alt="App Title" class="w-full h-full object-cover" />
            </div>


            <h3 class="mt-3 text-sm font-semibold text-gray-800">
                {title}
            </h3>


            <div class="flex justify-between items-center mt-2 text-xs">

                <div class="flex items-center text-green-600 font-medium">

                    <FaDownload />
                    <span>{downloads}</span>
                </div>


                <div class="flex items-center text-orange-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.288-3.97z" />
                    </svg>
                    <span>ratings</span>
                </div>

            </div>

        </div>

    );
};

export default ShowApps;