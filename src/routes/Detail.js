import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../components/MovieDetail"

import '../css/Detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap'

function Detail() {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState()

    useEffect(() => {
        getMovieDetail();
    }, [id]);

    const getMovieDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setDetail(json.data.movie)
        setLoading(false)

        console.log(json)
    }

    console.log(detail)

    return (
        <div>
            {loading ? (<h2>Loading...</h2>) : (
                <MovieDetail
                    title={detail.title} year={detail.year}
                    download_count={detail.download_count}
                    medium_cover_image={detail.medium_cover_image}
                    genres={detail.genres}
                    description_intro={detail.description_intro}
                    description_full={detail.description_full} />
            )}
        </div>
    )
}

export default Detail;