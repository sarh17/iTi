import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
    let [movie, setMovie] = useState("");
    const params = useParams();
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c`)

            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
            });
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img  style={{width:"30rem"}} src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                </div>
                <div className="col-5 position-absolute top-50 start-50">
                    <h2 className="text-info-emphasis">{movie.title}</h2>
                    <p className="text-secondary">{movie.release_date}</p>
                    <p className="text-secondary">{movie.overview}</p>
                    <h3>Budget: ${movie.budget}</h3>
                </div>
            </div>
        </div>
    );
}

export default Item;