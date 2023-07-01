import React from "react";

function Login() { 
    return (
        <main className="w-screen h-screen">
            <div className="flex justify-between w-full h-full">
                <div className="w-[40%] h-full bg-black text-white">
                    {/* This place is left for adding image */}
                    <img src="" alt="Image to be added" className="h-full w-full" />
                </div>

                {/* This is the main login form of the page */}
                <div className="w-[60%] h-full p-10 bg-gradient-to-br from-blue-600 to-black">
                    <div className="rounded-xl h-full flex-col space-y-5">
                        <div className="pl-20 pt-28">
                            <p className="text-white font-sans font-semibold text-2xl">Choose a profile!</p>
                        </div>

                        <div className="flex justify-between h-32 p-10 px-40">
                            <div className="flex-col space-y-2">
                                <div className="w-28 h-28 rounded-full bg-black  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pt-2">
                                    {/* image to be added over here */}
                                    <img src="" alt="recruiter image" className="w-24 h-24 rounded-full" />
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-white">Recruiter</p>
                                </div>
                            </div>
                            <div className="w-1 h-32 bg-zinc-200 rounded"></div>
                            <div className="flex-col space-y-2">
                                <div className="w-28 h-28 rounded-full bg-black  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pt-2">
                                    {/* image to be added over here */}
                                    <img src="" alt="job seeker image"  className="w-24 h-24 rounded-full" />
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-white">Job Seeker</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-24 px-20">
                            <div className="w-full h-1 bg-white rounded mt-2.5"></div>
                            <div className="mx-4 text-white text-md">
                                or
                            </div>
                            <div className="w-full h-1 bg-white rounded mt-2.5"></div>
                        </div>

                        <div className="flex justify-between space-x-5 px-24 pt-4">
                            <button className="w-full flex justify-between rounded bg-white text-black  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Google</button>
                            <button className="w-full flex justify-between rounded bg-blue-600 text-white  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Facebook</button>
                        </div>

                        <div className="flex justify-center pt-3">
                            <p className="text-sm text-white">Don't have an account? <span className="text-blue-400 hover:text-blue-600 font-semibold cursor-pointer">Sign up</span></p>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default Login;