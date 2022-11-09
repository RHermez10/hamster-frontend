import { Link } from "react-router-dom";

function StartPage() {
    return (
        <section>
            <h1>Welcome to Hamster Battle</h1>

            <img className="main" src="https://avatars.githubusercontent.com/u/25908852?v=4" alt="hamster" />
            <h4> There is one rule only and it's for you to decide who is the cutest Hamster </h4>
            <p> CHOOSE BY CLICKING ON ONE PICTURE </p>
            <article className="btn-article">
                <Link to="/Battle" >
                    <button className="start-btn">start game</button>
                </Link>

                <Link to="/Gallery" >
                    <button className="start-btn">Gallery</button>
                </Link>

            </article>

        </section>
    )
}

export default StartPage;