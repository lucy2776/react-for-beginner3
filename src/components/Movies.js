import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap'

Movie2.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}

function Movie2({ id, title, year, medium_cover_image, genres, summary }) {
    // const onError = (e) => {
    //     e.target.src = "./404.jpg"
    // }

    return (
        <div>
            <h3 className="title">
                <Link
                    basename={`${process.env.PUBLIC_URL}/movie/${id}`}
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}
                >
                    <b>📽 {title} ({year})</b>
                </Link>
                {/* 새로고침 없이 다른 페이지로 이동시켜주는 컴포넌트 */}
            </h3>

            <div className="imgAndGenres">
                <img src={medium_cover_image} alt={medium_cover_image} />
                <div>
                    <div className="genres">
                        <span>📢</span>
                        {genres.map((g) => (
                            <p key={g} className="genresInfo">  {g} </p>
                        ))}
                    </div>
                </div>
            </div>

            <p className="summary">🎞 {summary}</p>
        </div>
    )
}

export default Movie2;