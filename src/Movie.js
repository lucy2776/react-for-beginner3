import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function Movie() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Detail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Movie;



{/* <div key={movie.id}>
    <h3>{movie.title} ({movie.year})</h3>
    <img src={movie.medium_cover_image} alt={movie.medium_cover_image} />
    {movie.genres !== null ?
        <ul>
            {movie.genres.map((g) => (
                <li key={g}> {g} </li>
            ))}
        </ul> : null}
    <p>{movie.summary}</p> */}
