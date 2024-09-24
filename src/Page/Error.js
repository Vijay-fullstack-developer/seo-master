import Header from "./Header"

export default function Error() {
    return (
        <>
            <Header/>
            <div class="error-404">
                <div class="error-Msg">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <h1>404</h1>
                    <h1>Page Not Found</h1>
                    <p>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <div class="error-button "><button class="button" type="submit"><a href="./home">Go Back TO Home</a></button></div>
                </div>
            </div>


        </>
    )
}
