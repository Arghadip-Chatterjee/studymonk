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
                    <div className="flex-col bg-zinc-700 border w-full h-[500px] p-2 shadow-white shadow-lg">
                        <div className="bg-black w-full h-[40%]"></div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1 text-white">Job Portal's Find Your Dream Job service helps job seekers find their ideal job through personalized job searches, tailored to their particular skillset, experience level, and location. Our search engine sources job postings from around the web, ensuring that users get the most comprehensive list of available jobs. We provide helpful job-related advice and resources to help users make the most informed decisions about where to apply.</p>
                        </div>
                    </div>

                    {/* This is the second card  */}
                    <div className="flex-col bg-zinc-700 border w-full h-[550px] p-2 shadow-white shadow-lg">
                        <div className="bg-black w-full h-[40%]"></div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1 text-white">JJob Portal's Find Your Dream Job service is designed to help job seekers locate and apply for jobs that match their individual skills, interests, and goals. Our team of experienced recruiters will use their expertise to search for current and upcoming job postings that fit your unique qualifications, and to work with you to create a tailored job application package. Our service takes the guesswork out of the job search and helps you find your perfect professional fit.</p>
                        </div>
                    </div>

                    {/* This is the third card  */}
                    <div className="flex-col bg-zinc-700 border w-full h-[500px] p-2 shadow-white shadow-lg">
                        <div className="bg-black w-full h-[40%]"></div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1 text-white">Job Portal's Find Your Dream Job service is the perfect solution for job seekers to find the right job for them. With this service, job seekers can apply for jobs online, get access to job postings from different employers, and receive personalized job recommendations tailored to their qualifications and interests. Job Portal also provides helpful tips and resources to help job seekers maximize their chances of success in their job search.</p>
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

            {/* This is the section for testimonials */}
            <section className="w-full h-[750px] bg-zinc-800 flex-col justify-between p-10">

            </section>

            {/* This is the section for the contact us form */}
            <section className="w-full h-[750px] bg-black flex justify-between p-10">
                <div className="w-[40%] h-full flex-col space-y-3 pt-64">
                    <div>
                        <p className="text-3xl text-white font-serif">Job Portal Contact Form</p>
                    </div>

                    <div>
                        <p className="text-md text-white font-serif">Fill out this contact form to connect with Job Portal's customer service team for any inquiries, questions, or feedback.</p>
                    </div>
                </div>

                <div className="w-[50%] h-full flex-col space-y-5 pt-36">
                    <div className="flex-col justify-between w-full">
                        <div className="flex-col">
                            <label htmlFor="name" className="text-white font-serif text-sm w-[50%]">
                                Name
                                <br />
                            </label>
                            <input type="text" id="name" className="w-full"/>
                        </div>

                        <div className="flex-col pt-5">
                            <label htmlFor="email" className="text-white font-serif text-sm w-[50%]">
                                Email
                                <br />
                            </label>
                            <input type="email" id="email" className="w-full"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="text-white font-serif text-sm">
                            Message
                            <br />
                            <textarea name="message" id="message" className="w-full h-32"></textarea>
                        </label>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-[10px]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <button className="px-10">Send</button>
                    </div>
                </div>
            </section>

            {/* This is the section for the about page */}
            <section className="w-full h-[750px] bg-zinc-800 flex-col justify-between p-10 py-48">
                <div className="flex justify-center">
                    <p className="text-5xl font-serif text-white">About us</p>
                </div>

                <div className="pt-10 px-10">
                    <p className="text-xl text-center font-serif text-white">My name is Arjun and I am the proud owner of a job business in the Presidency Division of West Bengal, India. My business focuses on providing job opportunities to qualified individuals in the area. We specialize in recruiting highly qualified candidates for various positions in the banking, finance, IT, and other sectors. We are also actively involved in facilitating internships and apprenticeship programs.My team and I work hard to ensure that all the candidates we select are well-suited for the position. We take into account the individual's qualifications, experience, and skill set to make sure that the right match is made. We are not only committed to providing quality job opportunities for our customers but also to helping them find their dream job. With our experience and expertise, we strive to make sure that our customers get the best out of us.</p>
                </div>
            </section>

            {/* This is the section for the footer */}
            <section className="w-full h-[250px] bg-black flex justify-between p-10">
                <div className="py-16">
                    <p className="text-3xl font-serif text-white">Job Portal</p>
                </div>

                <div className="flex justify-between pt-10">
                    <div className="">
                        <ul className="flex-col space-y-5 text-white font-serif">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    <div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;