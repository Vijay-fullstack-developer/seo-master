import React, { useState, useRef } from 'react';

export default function Headers() {
    // State to manage the visibility of the search bar
    const [showSearch, setShowSearch] = useState(false);

    // Refs to manage DOM elements
    const searchIconRef = useRef(null);
    const closeBtnRef = useRef(null);

    // Handlers for showing and hiding the search bar
    const openSearchBar = () => setShowSearch(true);
    const closeSearchBar = () => setShowSearch(false);

    return (
        <>
            <nav class="nav-bar nav-stick">
                <div class="colu-one">
                    <div class="colu-two">
                        <h1 class="colu-three-data">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            SEO<span class="master-style">Master</span>
                        </h1>
                    </div>
                    <div class="header-one">
                        <div class="container-one active">
                        
                            <a class="headers-main" href="./home"  >Home</a>
                            <a class="headers-main" href="./about"  >About</a>
                            <a class="headers-main" href="./service" >Service</a>
                            <div class="dropdown">
                                <span id="dropdown-toggle">
                                    Project <i class="fa-solid fa-caret-down"></i>
                                </span>
                                <ul class="dropdown-list">
                                    <li><a href="./team">Our Team</a></li>
                                    <li><a href="./client">Testimonial</a></li>
                                    <li><a href="./error">404 Page</a></li>
                                </ul>
                            </div>
                            <a class="headers-main" href="./contact">Contact</a>
                        </div>
                        <div class="search-container">
                            <div class="search-icon" ref={searchIconRef} onClick={openSearchBar}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            {showSearch && (
                                <div class="search-bar" id="search-bar">
                                    <input type="text" placeholder="Search..." />
                                    <div
                                        class="search-icon-data"
                                        onClick={() => window.location.reload()} // Correctly use an arrow function
                                    >
                                        <i class="fa-solid fa-magnifying-glass search-bar-icon"></i>
                                    </div>
                                    <span class="close-btn" ref={closeBtnRef} onClick={closeSearchBar}>&times;</span>
                                </div>
                            )}
                        </div>
                        <div class="column-data">
                            <div class="colu-three">
                                <a href="https://htmlcodex.com/startup-company-website-template/" target="_blank">Pro Version</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
