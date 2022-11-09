import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FileBase64 from 'react-file-base64';
import Info from "./Info";

function Gallery() {

    const [hamsters, setHamsters] = useState([]);
    const [name, setName] = useState([])
    const [age, setAge] = useState([])
    const [favFood, setFavFood] = useState([])
    const [loves, setLoves] = useState([])
    const [imgName, setImgName] = useState([])
    const [clicked, setClicked] = useState(false)

    const [info, setInfo] = useState([])

    function getHamsters() {
        fetch('http://localhost:1338/hamsters')
            .then(res => res.json())
            .then(data => setHamsters(data))
    }

    //DELETE HAMSTER BY ID
    async function deleteHamster(id) {
        const response = await fetch('http://localhost:1338/hamsters/delete/' + id, {
            method: "DELETE",
        })

        const data = await response.text()
        setHamsters(hamsters => hamsters.filter(hamsters => hamsters._id !== id))
    }

    //GET HAMSTER BY ID
    async function getHamsterId(id) {
        const response = await fetch('http://localhost:1338/hamsters/' + id._id, {
            method: "GET",
        })
        const data = await response.text()
        setInfo(id)
    }

    //ADD NEW HAMSTER TO THE DATABASE
    async function addHamster() {
        const newHamster = {
            name: name,
            age: age,
            favFood: favFood,
            loves: loves,
            imgName: imgName
        }
        const response = await fetch('http://localhost:1338/hamsters/add', {
            method: "POST",
            body: JSON.stringify(newHamster),
            headers: { "Content-Type": "application/json" },
        })
        const data = await response.json()
        setHamsters([...hamsters, data])
    }

    useEffect(() => {
        getHamsters()

    }, [])
    return (
        <section>
            <Link to="/">
                <button className="gallery-btn">Home</button>
            </Link>
            <h3>ADD NEW HAMSTER</h3>

            <form className="form" onSubmit={() => addHamster()}>
                <label>
                    <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <input type="text" placeholder="age" onChange={(e) => setAge(e.target.value)} />
                </label>
                <label>
                    <input type="text" placeholder="favourite Food" onChange={(e) => setFavFood(e.target.value)} />
                </label>
                <label>
                    <input type="text" placeholder="loves" onChange={(e) => setLoves(e.target.value)} />
                </label>

                <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => setImgName(base64)} />
                <input className="submit" type="submit" />
            </form>


            <h1 className="text">Hamster Gallery</h1>
            {clicked ? <Info info={info} clicked={setClicked} /> : null}

            <section className="container">
                {

                    hamsters.map((hamster, i) => {
                        return (
                            <section key={i}  >
                                <section >

                                    <article>
                                        <h3> {hamster.name} </h3>
                                        <img className="gallery-img" src={hamster.imgName} alt="img" />
                                        <article>
                                            <button className="button" onClick={() => deleteHamster(hamster._id)} >&#x2716;</button>
                                            <button className="button" onClick={() => {
                                                getHamsterId(hamster)
                                                setClicked(true)
                                            }}  >&#9432;</button>
                                        </article>
                                    </article>
                                </section>
                            </section>
                        )
                    })
                }
            </section>
        </section>
    )
}
export default Gallery;