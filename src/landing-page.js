import React from "react";

function LandingPage() {
    return (
        <main className="h-full">

            {/* This is the navbar of the page */}
            <nav className="w-full h-24 bg-black flex justify-between p-4">
                <div className="p-4">
                    <p className="text-2xl text-white font-semibold font-mono">Job Portal</p>
                </div>

                <div className="p-2">
                    <ul className="flex justify-between w-full space-x-10">
                        <li>
                            <a href="#" className="text-md font-mono text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Home</a>
                        </li>

                        <li>
                            <a href="#" className="text-md font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">About us</a>
                        </li>

                        <li>
                            <a href="#" className="text-md font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Contact us</a>
                        </li>
                    </ul>
                </div>

                <div className="pt-2">
                    <button className="rounded">Search Job</button>
                </div>
            </nav>

            {/* This is the main banner of the landing page */}
            <section className="w-full h-[650px] bg-black flex justify-start">
                <div className="flex-col space-y-2 py-28 px-10">
                    <div className="font-serif leading-tight">
                        <p className="text-white text-[70px]">Presidency Division</p>
                        <p className="text-white text-[70px]">WB Jobs</p>
                    </div>

                    <div className="w-[60%] pt-6">
                        <p className="text-2xl font-serif text-white">
                        Job Portal in Presidency Division, WB, India is a comprehensive job search solution for jobseekers and employers. We provide access to job postings, resume databases, and career resources to help you find the right job. Our platform is easy to use and helps you find the perfect job, quickly and efficiently.
                        </p>
                    </div>
                </div>
            </section>

            {/* This is the Our services section */}
            <section className="w-full h-[750px] bg-zinc-800 flex-col justify-between p-10">

                {/* This is the heading of our services section */}
                <div className="pt-6">
                    <p className="text-5xl font-serif text-white">Our Services</p>
                </div>

                {/* This is the div for the collection of cards  */}
                <div className="flex space-x-5 justify-between pt-10">

                    {/* This is the first card */}
                    <div className="flex-col bg-white border w-full h-[500px] p-2">
                        <div className="bg-black w-full h-[40%]"></div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1">Job Portal's Find Your Dream Job service helps job seekers find their ideal job through personalized job searches, tailored to their particular skillset, experience level, and location. Our search engine sources job postings from around the web, ensuring that users get the most comprehensive list of available jobs. We provide helpful job-related advice and resources to help users make the most informed decisions about where to apply.</p>
                        </div>
                    </div>

                    {/* This is the second card  */}
                    <div className="flex-col bg-white border w-full h-[550px] p-2">
                        <div className="bg-black w-full h-[40%]"></div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1">JJob Portal's Find Your Dream Job service is designed to help job seekers locate and apply for jobs that match their individual skills, interests, and goals. Our team of experienced recruiters will use their expertise to search for current and upcoming job postings that fit your unique qualifications, and to work with you to create a tailored job application package. Our service takes the guesswork out of the job search and helps you find your perfect professional fit.</p>
                        </div>
                    </div>

                    {/* This is the third card  */}
                    <div className="flex-col bg-white border w-full h-[500px] p-2">
                        <div className="bg-black w-full h-[40%]"></div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1">Job Portal's Find Your Dream Job service is the perfect solution for job seekers to find the right job for them. With this service, job seekers can apply for jobs online, get access to job postings from different employers, and receive personalized job recommendations tailored to their qualifications and interests. Job Portal also provides helpful tips and resources to help job seekers maximize their chances of success in their job search.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* This is the section for the testimonial and the job posting */}
            <section className="w-full h-[750px] bg-black flex-col justify-between p-10">
                <div className="w-full h-[50%] flex-col space-y-5 pt-10">
                    <p className="text-3xl font-serif text-white">Job Portal in Presidency Division, WB, India is a fantastic way to find job opportunities. It's a great way to find companies that are looking for help and to find the right job for me. I'm so glad I found it!</p>
                    <p className="text-2xl font-serif text-white">- John Doe, Job Seeker</p>
                </div>

                <div className="w-full h-[50%] flex justify-between">
                    <div className="flex-col w-[50%] h-full space-y-5">
                        <p className="text-3xl font-serif text-white">Job Postings</p>
                        <p className=" font-serif text-white">We will help you create and optimize your job postings to attract the right candidates. Our team of experts will ensure that your job postings are visually appealing, engaging, and optimized for search engines.</p>
                    </div>

                    <div className="w-[50%] h-full p-6">
                        <div className="w-full h-full bg-white"></div>
                    </div>
                </div>
            </section>

            {/* This is the section for the contact us form */}
            <section className="w-full h-[750px] bg-zinc-800 flex justify-between p-10">
                <div className="w-[40%] h-full flex-col space-y-3 pt-64">
                    <div>
                        <p className="text-3xl text-white font-serif">Job Portal Contact Form</p>
                    </div>

                    <div>
                        <p className="text-md text-white font-serif">Fill out this contact form to connect with Job Portal's customer service team for any inquiries, questions, or feedback.</p>
                    </div>
                </div>

                <div className="w-[50%] h-full">

                </div>
            </section>
        </main>
    );
}

export default LandingPage;