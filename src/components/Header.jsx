import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
                <h1>MAGIC MUSHROOM</h1>
                <ul>
                    <li><a className="links" href="/">Home</a></li>
                    <li><a className="links" href= "/about">About</a></li>
                    <li><a className="links" href= "/contact">Contact</a></li>
                </ul>
        </div>
    )
}
export default Header;