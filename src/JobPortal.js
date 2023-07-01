import React, { useState } from 'react';
import './JobPortal.css';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ClientReviews = () => {
    const reviews = [
      { company: 'Google', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' },
      { company: 'Microsoft', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' },
      // Add more reviews as needed
    ];
  
    return (
      <section className="reviews">
        <h2>Client Reviews</h2>
        <Carousel autoPlay interval={5000} infiniteLoop>
          {reviews.map((review, index) => (
            <div key={index}>
              <h3>{review.company}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </Carousel>
      </section>
    );
  };
  



const JobPortal = () => {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [responseJSON, setResponseJSON] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search',
                {
                    params: {
                        SearchQuery: searchQuery,
                    },
                    headers: {
                        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
                        'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com',
                    },
                }
            );
            setJobs(response.data);
            setResponseJSON(JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.error(error);
        }
    };

    // Demo job offers data
    const demoJobOffers = [
        { id: 1, title: 'Demo Job 1', company: 'Demo Company 1', url: '#' },
        { id: 2, title: 'Demo Job 2', company: 'Demo Company 2', url: '#' },
        { id: 3, title: 'Demo Job 3', company: 'Demo Company 3', url: '#' },
    ];

    

    return (
        <div className="job-portal">
            {/* Navigation */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Blogs</li>
                    <button>Submit a Job </button>
                </ul>
            </nav>

            {/* Header */}
            <header>
                <h1>Job Portal</h1>
                <p>Find your dream job today!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </header>

            {/* Job Offers Section */}
            <section className="job-offers">
                <h2>{searchQuery ? `${searchQuery} Job Offers` : 'Job Offers'}</h2>
                <div className="job-cards">
                    {(searchQuery ? jobs.data : demoJobOffers) &&
                        (searchQuery ? jobs.data : demoJobOffers).map((job) => (
                            <div className="job-card" key={job.id}>
                                <h3>{job.title}</h3>
                                <p>Company: {job.company}</p>
                                <a href={job.url} target="_blank" rel="noopener noreferrer">
                                    <button>Apply</button>
                                </a>
                            </div>
                        ))}
                </div>
            </section>

            {/* Someone Needs Your Team Section */}
            <section className="someone-needs-your-team">
                <h2>Someone Needs Your Team</h2>
                <div className="card-container">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" alt="Card 1" />
                        <div className="card-content">
                            <h3>Card 1 Title</h3>
                            <p>Card 1 Description</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" alt="Card 2" />
                        <div className="card-content">
                            <h3>Card 2 Title</h3>
                            <p>Card 2 Description</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" alt="Card 3" />
                        <div className="card-content">
                            <h3>Card 3 Title</h3>
                            <p>Card 3 Description</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <ClientReviews/>


            {/* We Support You Section */}
            <section className="support-section">
                <div className="support-content">
                    <h2>We support you in all your professional projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula enim vel interdum varius. Vestibulum ullamcorper nisi eget nulla consectetur, vel consectetur metus laoreet.</p>
                    <button>Learn More</button>
                </div>
                <div className="support-image">
                    <img src="https://img.freepik.com/free-photo/landmarks-modern-city_1359-338.jpg?w=1380&t=st=1688182233~exp=1688182833~hmac=23253f6c5c1ec4b19e93db04b0de146cfd0586c1b7b1d66c2617842d774a7554" alt="Support Image" />
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-us">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>

            <section class="how-it-works-section">
                <div class="vertical-line"></div>
                <div class="how-it-works-container">
                    <div class="how-it-works-item">
                        <img src="https://uploads-ssl.webflow.com/63c122ae370b516013590f73/63c122f2364d235423ecbb6b_WE%20R%20dashboard%202%20(1).svg" alt="Step 1" />
                        <h3>Step 1</h3>
                        <p>Create a profile that includes your skills, experience, and availability.</p>
                    </div>
                    <div class="how-it-works-item">
                        <img src="https://uploads-ssl.webflow.com/63c122ae370b516013590f73/63c122f2364d236122ecbb6d_We%20Recruit%20Dashboard%202%20(3).svg" alt="Step 2" />
                        <h3>Step 2</h3>
                        <p>Search for jobs that match your interests and skills.</p>
                    </div>
                </div>
            </section>




            {/* Blog Section */}
            <section className="blog-section">
                <h2>Latest Blog Posts</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <img src="https://uploads-ssl.webflow.com/63c13195a12dc32d42fbe00d/63c13473984e0e37ca12928d_We%20Recruit%20background%20image%20contact-p-1080.jpg" alt="Blog Post 1" />
                        <div className="blog-card-content">
                            <h3>Blog Post 1 Title</h3>
                            <p>Blog Post 1 Description</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src="https://uploads-ssl.webflow.com/63c13195a12dc32d42fbe00d/63c13473984e0e37ca12928d_We%20Recruit%20background%20image%20contact-p-1080.jpg" alt="Blog Post 2" />
                        <div className="blog-card-content">
                            <h3>Blog Post 2 Title</h3>
                            <p>Blog Post 2 Description</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src="https://uploads-ssl.webflow.com/63c13195a12dc32d42fbe00d/63c1342534c43240a02f88fa_We%20Recruit%20image%20blog%20post%202%20(1).png" alt="Blog Post 3" />
                        <div className="blog-card-content">
                            <h3>Blog Post 3 Title</h3>
                            <p>Blog Post 3 Description</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer>
                <p>&copy; 2023 Job Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default JobPortal;
