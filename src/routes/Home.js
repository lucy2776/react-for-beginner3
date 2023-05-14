import Movies from "../components/Movies.js"

import { useEffect, useState } from "react"
import '../css/Home.css'

import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/list_movies.json';

// GET 요청 예시
axios.get(API_URL)
    .then(response => {
        // 성공적으로 응답 받은 경우
        console.log(response.data);
    })
    .catch(error => {
        // 에러 발생한 경우
        console.error(error);
    });

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const getMovies = async () => {
            const json = await (
                await fetch(
                    `https://yts.mx/api/v2/list_movies.json`
                )
            ).json()
            setMovies(json.data.movies)
            setLoading(false)
        }

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