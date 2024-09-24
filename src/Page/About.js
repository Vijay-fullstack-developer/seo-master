import Header from "./Header"

export default function About() {
    return (

        <>
        <Header/>
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
                            <img src="./Assert/about.jpg"></img>
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



        </>
    )

};