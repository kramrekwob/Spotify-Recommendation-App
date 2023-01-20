
const Footer = () => {
    return (
        <footer className="bg-dark py-4 d-flex">
        <div className="footer-container col-7 d-flex justify-content-end">
          <a href="https://github.com/kramrekwob"> <img src="./github.svg" class="footer-icon" alt="github link"></img></a>
          <a href="https://www.linkedin.com/in/markbowker4/"> <img src="./linkedin.svg" class="footer-icon" alt="linkedin link"></img></a>
          <a href="https://markbowker.dev/"> <img src="./portfolio.svg" class="footer-icon" alt="portfolio link"></img></a>
        </div>
        <div className="spotify-section col-4 d-flex justify-content-end align-items-center">
            <span className="text-light p-2">All Data and Art from</span>
          <img src="./Spotify_Logo.svg" alt="spotify logo" className="spotify-logo"/>
        </div>
      </footer>
    );
}
export default Footer;