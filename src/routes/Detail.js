import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import MovieDetail from "../components/MovieDetail.js"

import axios from 'axios';

axios.get('https://yts.mx/api/v2/list_movies.json', { withCredentials: true })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })

function Detail() {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState()

    useEffect(() => {
        const getMovieDetail = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`, { mode: "cors" }
                )
            ).json()
            setDetail(json.data.movie)
            setLoading(false)

            console.log(json)
        }

        getMovieDetail();
    }, [id]);

    console.log(detail)

    return (
        <div>
            {loading ? (<h2 className="loading">Loading...</h2>) : (
                <MovieDetail
                    title={detail.title} year={detail.year}
                    download_count={detail.download_count}
                    medium_cover_image={detail.medium_cover_image}
                    rating={detail.rating}
                    genres={detail.genres}
                    description_intro={detail.description_intro}
                    description_full={detail.description_full} />
            )}
            <br />
        </div>
    )
}

export default Detail;