import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Result from "./Result";

function Battle() {
    //SOME STATE TO SAVE OUR DATA. 
    const [hamsters, setHamsters] = useState([])
    const [winner, setWinner] = useState({})
    const [loser, setLoser] = useState({})
    const [clicked, setClicked] = useState(false)

    //FETCING TO GET 2 RANDOM HAMSTERS FRON THE SERVER
    function getRandom() {
        fetch('http://localhost:1338/hamsters/random')
            .then(res => res.json())
            .then(data => setHamsters(data))
    }

    //FETCING TO UPDATE THE HAMSTER THAT WINS THE BATTLE
    async function updateWinner(winner) {
        const upWinner = {
            wins: winner.wins + 1,
            defeats: winner.defeats,
            games: winner.games + 1,
        }

        const response = await fetch('http://localhost:1338/hamsters/update/' + winner._id, {
            method: "PUT",
            body: JSON.stringify(upWinner),
            headers: { "Content-Type": "application/json" },
        })

        setWinner({ ...winner }, winner.wins = winner.wins + 1);
        const data = await response.text()
    }

    //FETCING TO UPDATE THE HAMSTER THAT LOOSES THE BATTLE
    async function updateLoser(loser) {
        const upLoser = {
            wins: loser.wins,
            defeats: loser.defeats + 1,
            games: loser.games + 1,
        }
        const response = await fetch('http://localhost:1338/hamsters/update/' + loser._id, {
            method: "PUT",
            body: JSON.stringify(upLoser),
            headers: { "Content-Type": "application/json" },

        })

        setLoser({ ...loser }, loser.defeats = loser.defeats + 1);
        const data = await response.text()
    }

    //FUNCTION THAT CONTAINS UPDATE "LOSER" & "WINNER" FUNCTIONS THAT WILL BE CALLED IN BUTTON BELOW
    async function cutestHamster(x, y) {
        await updateWinner(x)
        await updateLoser(y)
        setWinner(x)
        setLoser(y)
        getRandom()
    }

    console.log(hamsters);

    useEffect(() => {
        getRandom()
    }, [])
    return (

        // MAPING TO PRINT OUT 2 RANDOM HAMSTER
        //WHEN IMG IS CLICKED THE RESULT OF THE MATCH WILL APPEAR.
        <section>
            <Link to="/Gallery">
                <button className="gallery-btn">Show Gallery </button>
            </Link>
            <h1>Let the Battle start</h1>

            {clicked ? <Result wPoint={winner} lPoint={loser} /> : null}

            <section className="battle">
                {clicked ? <h2>NEW BATTLE</h2> : null}
                {
                    hamsters ? hamsters.map((hams, i) =>
                        <section className="col" key={i} >
                            <h1> {hams.name} </h1>
                            <img className="img" src={hams.imgName} onClick={() => {
                                setClicked(true)
                                cutestHamster(hams, hamsters?.filter(ham => ham !== hams)[0])
                            }} alt="" />
                        </section>

                    ) : null
                }

            </section>
        </section>
    )
}
export default Battle;
