import Header from "./Header"

export default function Project() {
    return (

        <>
            <Header/>
            <div class="project-section" id="project">
                <div class="project-data">
                    <h4>Our Projects</h4>
                    <h1>Recently Launched Projects</h1>
                    <div class="project-cta">
                        <ul class="click-button">
                            <li class="cta-text" data-filter="all">All</li>
                            <li class="cta-text" data-filter="design">Design</li>
                            <li class="cta-text" data-filter="development">Development</li>
                        </ul>
                    </div>
                    <div class="img-section">
                        <div class="img-one" data-category="design">
                            <img src="./Assert/portfolio-1.jpg" />
                        </div>
                        <div class="img-one" data-category="design">
                            <img src="./Assert/portfolio-2.jpg" />
                        </div>
                        <div class="img-one" data-category="design">
                            <img src="./Assert/portfolio-3.jpg" />
                        </div>
                        <div class="img-one" data-category="development">
                            <img src="./Assert/portfolio-4.jpg" />
                        </div>
                        <div class="img-one" data-category="development">
                            <img src="./Assert/portfolio-5.jpg" />
                        </div>
                        <div class="img-one" data-category="development">
                            <img src="./Assert/portfolio-6.jpg" />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
