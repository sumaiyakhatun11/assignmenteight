import React from 'react';
import googleLogo from '../../assets/googleLogo.png'
import appStore from '../../assets/appStore.png'
import hero from '../../assets/hero.png'
import { useLoaderData } from 'react-router';
import ShowApps from '../../components/ShowApps/ShowApps';

const Home = () => {
    const appsData = useLoaderData();

    console.log(appsData)

    return (
        <div>
            <div className=' items-center text-center my-5 mx-[10rem]'>
                <h1 className='text-5xl font-extrabold my-4'>We Build <br />
                    <span className='text-[#723cf0]'>Productive</span> Apps</h1>

                <h1>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</h1>  ,

                <div className='text-center items-center flex gap-7 justify-center'>
                    <a href="https://play.google.com/store/apps?hl=en">
                        <div className='flex'>
                            <img src={googleLogo} alt="" />
                            <h1>Google Play</h1>
                        </div>
                    </a>
                    <a href="https://www.apple.com/app-store/">
                        <div className='flex'>
                            <img src={appStore} alt="" />
                            <h1>App Store</h1>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <img src={hero} alt="" />
            </div>
            <section class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16">
                <div class="text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-12">
                        Trusted By Millions, Built For You
                    </h2>

                    <div class="flex flex-col md:flex-row justify-center items-center gap-12">

                        <div class="text-center">
                            <p class="text-lg font-medium mb-2">Total Downloads</p>
                            <h3 class="text-5xl font-extrabold">29.6M</h3>
                            <p class="text-sm mt-2 opacity-80">21% More Than Last Month</p>
                        </div>


                        <div class="text-center">
                            <p class="text-lg font-medium mb-2">Total Reviews</p>
                            <h3 class="text-5xl font-extrabold">906K</h3>
                            <p class="text-sm mt-2 opacity-80">46% More Than Last Month</p>
                        </div>


                        <div class="text-center">
                            <p class="text-lg font-medium mb-2">Active Apps</p>
                            <h3 class="text-5xl font-extrabold">132+</h3>
                            <p class="text-sm mt-2 opacity-80">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='w-[430px] mx-auto text-center mt-10'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-2 m-10 p-3'>
                {
                    appsData.slice(0, 8).map((appData) => (
                        <ShowApps key={appData.id} appData={appData}></ShowApps>
                    ))
                }
            </div>

            <div className='flex justify-center'>
                <button className=' rounded-xl py-3 mb-10 px-10 bg-gradient-to-r from-purple-900 to-purple-400 text-white'>Show All</button>
            </div>


        </div>
    );
};

export default Home;