import { Link } from 'react-router-dom'

//MORE INFORMATION ABOUT HAMSTER

function Info({ info, clicked }) {

    return (
        <section className="more-info" style={{ display: "block" }} >
            <button onClick={() => clicked(false)}> close</button>
            <h3>INFORMATION</h3>
            <h4>Name: {info.name} </h4>
            <p>Age: {info.age} </p>
            <p>Fave Food: {info.favFood} </p>
            <p>Loves: {info.loves}  </p>
        </section>
    )
}

export default Info;