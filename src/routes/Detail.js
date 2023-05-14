import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import MovieDetail from "../components/MovieDetail.js"

import axios from 'axios';


function Detail() {
    const { id } = useParams()

    const API_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

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

    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState()

    useEffect(() => {
        const getMovieDetail = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
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