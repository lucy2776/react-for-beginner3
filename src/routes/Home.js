import Movies from "../components/Movies.js"

import { useEffect, useState } from "react"
import '../css/Home.css'

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json`
            )
        ).json()
        setMovies(json.data.movies)
        setLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="container">
            <h1 className="movieList">
                🎬 Movie List
            </h1>
            <div className="movies">
                {loading ? (<h2 className="loading">Loading...</h2>) : (
                    movies.map((movie) => (
                        <Movies
                            key={movie.id} id={movie.id}
                            title={movie.title} year={movie.year}
                            medium_cover_image={movie.medium_cover_image}
                            rating={movie.rating}
                            genres={movie.genres}
                            summary={movie.summary}
                        />
                    ))
                )}
            </div>
        </div>
    )
    // key : React.js에서만, map안에서 component들을 render할 때 사용
}

export default Home;