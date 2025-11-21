import { Link } from "react-router-dom";
export default function About()
{
    return(
        <>
        <main>
            <h2>Who are you.?</h2>
            <p>That feels an existential question.</p>
        </main>
          <nav>
            <Link to="/">Home</Link>
             </nav>
        </>
    );
}