import Header from "./Header"
import React, { useRef } from "react";

export default function Home() {

    function filterProjects(filterValue) {
        const filterButtons = document.querySelectorAll('.cta-text');
        const images = document.querySelectorAll('.img-one');

        // Remove 'show' class from all images
        images.forEach(image => {
            image.classList.remove('show');
        });

        // Add 'show' class to filtered images
        images.forEach(image => {
            if (filterValue === 'all') {
                image.classList.add('show');
            } else if (image.getAttribute('data-category') === filterValue) {
                image.classList.add('show');
                console.log(image)
            }
        });

        // Remove 'active' class from all filter buttons
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        const activeButton = document.querySelector(`.cta-text[data-filter="${filterValue}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Display all images by default
    document.addEventListener('DOMContentLoaded', () => {
        filterProjects('all');
    });





    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    function validateInputs() {
        // Clear previous styles
        const inputs = [nameRef.current, emailRef.current, subjectRef.current, messageRef.current];
        inputs.forEach(input => {
            if (input) {
                input.style.border = '';
            }
        });
    
        // Check for empty inputs
        let allFilled = true; // Flag to check if all inputs are filled
        inputs.forEach(input => {
            if (input && input.value.trim() === '') {
                input.style.border = '2px solid red';
                allFilled = false; // Mark as not all filled
            }
        });
    
        if (allFilled) {
            // Reload the page if all fields are filled
            window.location.reload();
        }
    }




    return (
        <>
            <div class="main-page">
                <header >
                    <div class="main-header">
                        <Header pagename="home" />
                        <div class="hero-banner" id="home">
                            <div class="hero-banner-tool">
                                <h1 class="header-h1">All in one SEO tool need to grow your business rapidly</h1>
                                <p class="content-data">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed
                                    magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                                <div class="hero-cta">
                                    <a href="#" class="hero-cta-1">Free Quote</a>
                                    <a href="./contact" class="hero-cta-2"> Contact</a>

                                </div>
                            </div>
                            <div class="hero-img">
                                <img src="./Assert/hero-banner-image.png" alt="hero-banner" />

                            </div>
                        </div>
                    </div>
                </header>


                <div class="about-data-one" id="about" >
                    <div class="About-page">
                        <div class="about-us">
                            <h4 class="icon-space" >About Us</h4>
                            <h1>The best SEO solution with 10 years of experience</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div class="list-of-item">
                                <ul class="list-data">
                                    <li><i class="fa-solid fa-check"></i> Award Winning</li>
                                    <li><i class="fa-solid fa-check"></i>Professional Staff</li>
                                    <li><i class="fa-solid fa-check"></i>24/7 Support</li>
                                    <li><i class="fa-solid fa-check"></i>Fair Prices</li>
                                </ul>
                            </div>
                            <div class="button-cta">
                                <a class="square-size" href="">Read More</a>
                                <a class="circle" href=""><i class="fa-brands fa-facebook"></i></a>
                                <a class="circle" href=""><i class="fa-brands fa-square-twitter"></i></a>
                                <a class="circle" href=""><i class="fa-brands fa-instagram"></i></a>
                                <a class="circle" href=""><i class="fa-brands fa-linkedin"></i></a>

                            </div>
                        </div>
                        <div class="hero-img">
                            <img class="data" src="./Assert/about.jpg"></img>
                        </div>
                    </div>
                </div>


                <div class="email-spect">
                    <div class="email-data" >
                        <h1>Ready to get started</h1>
                        <p>Diam elitr est dolore at sanctus nonumy.</p>
                        <input class="input-mail" text="type" placeholder="Enter the Email" />
                    </div>
                    <div class="image-newletter">
                        <img src="./Assert/newsletter.png"></img>
                    </div>
                </div>






                <div class="service" id="service">
                    <div class="service-data">
                        <h4 class="data-one">Our Services</h4>
                        <h1>What Solutions We Provide</h1>
                        <div class="section-assert">
                            <div class="section-one">
                                <img class="hover-image" src="./Assert/icon-shape-primary.png" />
                                <i class="fa-solid fa-house icon-image"></i>
                                <h3>SEO Optimization</h3>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div class="section-data" ><a href="#">Read More</a></div>

                            </div>
                            <div class="section-one">
                                <img class="hover-image" src="./Assert/icon-shape-primary.png" ></img>
                                <i class="fa-solid fa-house icon-image"></i>
                                <h3>Web Design</h3>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div class="section-data" ><a href="#">Read More</a></div>
                            </div>
                            <div class="section-one">
                                <img class="hover-image" src="./Assert/icon-shape-primary.png" />
                                <i class="fa-solid fa-house icon-image"></i>
                                <h3>Social Media Marketing</h3>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div class="section-data" ><a href="#">Read More</a></div>
                            </div>
                            <div class="section-one">
                                <img class="hover-image" src="./Assert/icon-shape-primary.png" />
                                <i class="fa-solid fa-house icon-image"></i>
                                <h3>Email Marketing</h3>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div class="section-data" ><a href="#">Read More</a></div>
                            </div>
                            <div class="section-one">
                                <img class="hover-image" src="./Assert/icon-shape-primary.png" />
                                <i class="fa-solid fa-house icon-image"></i>
                                <h3>PPC Advertising</h3>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div class="section-data" ><a href="#">Read More</a></div>
                            </div>
                            <div class="section-one">
                                <img class="hover-image" src="./Assert/icon-shape-primary.png" />
                                <i class="fa-solid fa-house icon-image"></i>
                                <h3>App Development</h3>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div class="section-data" ><a href="#">Read More</a></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="project-section" id="project">
                    <div class="project-data">
                        <h4>Our Projects</h4>
                        <h1>Recently Launched Projects</h1>
                        <div class="project-cta">
                            <ul className="click-button">
                                <li className="cta-text show active" id="all" onClick={() => filterProjects('all')} data-filter="all">All</li>
                                <li className="cta-text show active" id="design" onClick={() => filterProjects('design')} data-filter="design">Design</li>
                                <li className="cta-text show active" id="development" onClick={() => filterProjects('development')} data-filter="development">Development</li>
                            </ul>
                        </div>
                        <div class="img-section">
                            <div class="img-one" id="first-one" data-category="design">
                                <img src="./Assert/portfolio-1.jpg" alt="Project 1" />
                            </div>
                            <div class="img-one" id="second-one" data-category="design">
                                <img src="./Assert/portfolio-2.jpg" alt="Project 2" />
                            </div>
                            <div class="img-one" id="third-one" data-category="design">
                                <img src="./Assert/portfolio-3.jpg" alt="Project 3" />
                            </div>
                            <div class="img-one" id="four-one" data-category="development">
                                <img src="./Assert/portfolio-4.jpg" alt="Project 4" />
                            </div>
                            <div class="img-one" id="five-one" data-category="development">
                                <img src="./Assert/portfolio-5.jpg" alt="Project 5" />
                            </div>
                            <div class="img-one" id="six-one" data-category="development">
                                <img src="./Assert/portfolio-6.jpg" alt="Project 6" />
                            </div>
                        </div>
                    </div>
                </div>







                <div class="client-feedback" id="client">
                    <div class="client-data">
                        <i class="fa-solid fa-quote-left"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <img src="./Assert/testimonial-1.jpg" alt="testimonial-1"></img>
                        <div class="ps-3">
                            <h6>Client Name</h6>
                            <h6>Profession</h6>
                        </div>
                    </div>
                    <div class="client-data">
                        <i class="fa-solid fa-quote-left"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <img src="./Assert/testimonial-2.jpg" alt="testimonial-2"></img>
                        <div class="ps-3">
                            <h6>Client Name</h6>
                            <h6>Profession</h6>
                        </div>
                    </div>
                    <div class="client-data">
                        <i class="fa-solid fa-quote-left"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <img src="./Assert/testimonial-3.jpg" alt="testimonial-3"></img>
                        <div class="ps-3">
                            <h6>Client Name</h6>
                            <h6>Profession</h6>
                        </div>
                    </div>
                    <div class="client-data">
                        <i class="fa-solid fa-quote-left"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <img src="./Assert/testimonial-4.jpg" alt="testimonial-4"></img>
                        <div class="ps-3">
                            <h6>Client Name</h6>
                            <h6>Profession</h6>
                        </div>
                    </div>
                </div>




                <div class="our-team" id="team">
                    <div class="our-team-content">
                        <h4>Our Team</h4>
                        <h1>Meet Our Team Members</h1>

                        <div class="team-support">
                            <div class="container-support-one">
                                <div class="team-image">
                                    <div class="d-flex">
                                        <div class="team-support-content">
                                            <a class="circle" href=""><i class="fa-brands fa-facebook"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-square-twitter"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-instagram"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-linkedin"></i></a>
                                        </div>
                                        <img src="/Assert/Team-1.jpg" alt="Team-1" />
                                    </div>
                                    <div class="content-text">
                                        <h4>Jhon Doe</h4>
                                        <h6>CEO</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="container-support-one">
                                <div class="team-image">
                                    <div class="d-flex">
                                        <div class="team-support-content">
                                            <a class="circle" href=""><i class="fa-brands fa-facebook"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-square-twitter"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-instagram"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-linkedin"></i></a>
                                        </div>
                                        <img src="/Assert/Team-2.jpg" alt="Team-1" />
                                    </div>
                                    <div class="content-text">
                                        <h4>Emma William</h4>
                                        <h6>Manager</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="container-support-one">
                                <div class="team-image">
                                    <div class="d-flex">
                                        <div class="team-support-content">
                                            <a class="circle" href=""><i class="fa-brands fa-facebook"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-square-twitter"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-instagram"></i></a>
                                            <a class="circle" href=""><i class="fa-brands fa-linkedin"></i></a>
                                        </div>
                                        <img src="/Assert/Team-3.jpg" alt="Team-1" />
                                    </div>
                                    <div class="content-text">
                                        <h4>Noah Michael</h4>
                                        <h6>Designer</h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>



            <div className="contact-us" id="contact-data">
                <h4>Contact Us</h4>
                <h1>Contact For Any Query</h1>
                <div className="contact-us-data">
                    <input className="name-input" type="text" ref={nameRef} placeholder="Your Name"/>
                    <input className="email-input" type="email" ref={emailRef} placeholder="Your Email"
                    />
                </div>
                <div className="contact-us-data-two">
                    <input id="subject-input" type="text" ref={subjectRef} placeholder="Subject" />
                </div>
                <div className="contact-us-data-three">
                    <textarea id="message-input"  ref={messageRef} placeholder="Leave the message"
                    ></textarea>
                </div>
                <div className="contact-us-data-four">
                    <button id="button" type="button" onClick={validateInputs}
                    > Send Message </button>
                </div>
            </div>






        </>
    )
}