import { Link } from "react-router"

export default function Rules() {
    return (
        <div>
            Rules:
            <ul>
                <li>Only click each card once</li>
                <li>Clicking a card twice resets the game</li>
            </ul>
            <Link to="/">Home</Link>
        </div>
    )
}