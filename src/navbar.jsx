 import { Link } from 'react-router-dom';
import './navbar.scss';
 export default function Navbar(){
    return(
        <div>
            <ul>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/blog'><li>Blog</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    )
}