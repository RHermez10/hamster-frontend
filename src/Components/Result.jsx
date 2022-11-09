function Result({ wPoint, lPoint }) {
    // WE RECIEVE THE RESULT FROM BATTLE COMPONENT. 
    return (
        <section>
            <section>
                <h3>RESULT</h3>
                <article className="left" >
                    <h2>Winner</h2>
                    <h3> {wPoint.name} </h3>
                    <img className="result-img" src={wPoint.imgName} alt="" />
                    <p> wins: {wPoint.wins} </p>
                    <p> defeats: {wPoint.defeats} </p>
                </article>
                <article className="right">
                    <h2>Loser</h2>
                    <h3> {lPoint.name} </h3>
                    <img className="result-img" src={lPoint.imgName} alt="" />
                    <p> wins: {lPoint.wins} </p>
                    <p> defeats: {lPoint.defeats} </p>
                </article>
            </section>
        </section>
    )
}
export default Result;