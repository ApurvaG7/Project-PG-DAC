import { Link } from "react-router-dom";
import '../Css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container" style={{
            background: "linear-gradient(to right, #0D92F4, #77CDFF)",
            color: "#fff",
            padding: "3rem 0",
            marginTop: "50px"
        }}>
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Left Section - Aaryan */}
                    <div className="col-md-4 mb-4">
                        <h4>AARYAN SHARMA</h4>
                        <div className="mt-3">
                            <h5>PUNE</h5>
                            <p>
                                Email:{" "}
                                <a href="mailto:aaryansharma4.r@gmail.com" className="text-light">
                                    aaryansharma4.r@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/aaryan-sharma-762018161/ " target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                LinkedIn
                            </a>
                            
                        </div>
                    </div>

                    {/* Middle Section - CTA */}
                    <div className="col-md-4 mb-4">
                        <h5>Find your perfect ride</h5>
                        <p>You're at the right place!</p>
                        <div className="cta-links">
                            <Link to="/publishRide" className="btn btn-warning btn-sm mb-2">
                                Publish a Ride →
                            </Link>
                            <br />
                            <Link to="/findRide" className="btn btn-outline-light btn-sm">
                                Find a Ride →
                            </Link>
                        </div>
                        <p className="mt-3" style={{ fontStyle: "italic" }}>
                            "Connect with fellow travelers for a seamless journey experience!"
                        </p>
                    </div>

                    {/* Right Section -  Apurva */}
                    <div className="col-md-4 mb-4">
                        <div className="row">
                            {/* Apurva */}
                            <div className="col-6">
                                <h5>APURVA GONDHALI</h5>
                                <div className="mt-3">
                                    <h5>PUNE</h5>
                                    <p>
                                Email:{" "}
                                <a href="mailto:apurvasg24@gmail.com" className="text-light">
                                apurvasg24@gmail.com
                                </a>
                            </p>
                                    
                                </div>
                            </div>                            
                        </div>

                        <div className="social-links mt-3">
                            <a href="https://www.linkedin.com/in/apurva-gondhali/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                LinkedIn
                            </a>
                            
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="row text-center mt-3">
                    <div className="col-12">
                        <p className="mb-0">
                            © {new Date().getFullYear()} ShareMyRide. All rights reserved, By AG7.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;