import { Link } from "react-router-dom";

import './Homepage.style.scss';

const Homepage = () => {
    return (

        <div className="container">
            <div className="main-wrapper">
                <div className="card women">
                    <div className="overlay"></div>
                    <Link to='/women-collection'>WOMEN</Link>
                </div>
                <div className="card men">
                    <Link to='/men-collection'>MEN</Link>
                </div>
            </div>
        </div>
    );
}
export default Homepage;