import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <h1>Desenvolvimento 06</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </nav>
    )
}