import { Link } from "react-router-dom";

export default function NavHeader() {
  return (
    <nav>
        <li>
            <ul>
                <Link to="/">Home</Link>
            </ul>
        </li>
    </nav>
  )
}
