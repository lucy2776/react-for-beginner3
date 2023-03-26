import { useEffect, useState } from "react"
import Movies from "../components/Movies"

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json()
        setMovies(json.data.movies)
        setLoading(false)
    }

    useEffect(() => {
        // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        //     .then(response => response.json())
        //     .then((json) => {
        //         setMovies(json.data.movies)
        //         setLoading(false)
        //     })

        getMovies()
    }, [])

    console.log(movies)

    return (
        <div>
            <h1 style={{
                margin: 0,
                padding: "20px",
                textAlign: "center"
            }}>
                🎬 Movie List 🎬
            </h1>
            {loading ? (<h2>Loading...</h2>) : (
                movies.map((movie) => (
                    <Movies key={movie.id} id={movie.id}
                        title={movie.title} year={movie.year}
                        medium_cover_image={movie.medium_cover_image}
                        genres={movie.genres} summary={movie.summary} />
                    // key : React.js에서만, map안에서 component들을 render할 때 사용
                ))
            )}
        </div>
    )
}

export default Home;