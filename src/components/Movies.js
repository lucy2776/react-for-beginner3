import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import '../css/Home.css'
import { useState } from "react";

Movie2.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}

function Movie2({ id, title, year, medium_cover_image, rating, genres, summary }) {
    // const onError = (e) => {
    //     e.target.src = "./404.jpg"
    // }

    const [isZoomed, setIsZoomed] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const handleMouseEnter = () => {
        setIsZoomed(true);
        setIsShown(true);
    };
    const handleMouseLeave = () => {
        setIsZoomed(false);
        setIsShown(false);
    };

    return (
        <div className="movies">

            <div className="movie">
                <Link
                    to={`/movie/${id}`}
                    // Link = to, button = pathname
                    className="title"
                >
                    <div>
                        <img
                            className={`image-container ${isZoomed ? 'zoomed-in' : ''}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            src={medium_cover_image} alt={medium_cover_image}
                        />

                        <div>
                            <b>{title.length > 20 ? `${title.slice(0, 20)} ...` : `${title} (${year})`}</b>
                        </div>
                        {/* 새로고침 없이 다른 페이지로 이동시켜주는 컴포넌트 */}
                    </div>

                    <div
                        className={`box ${isShown ? 'show' : ''}`}
                        // className="box show"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="content">
                            <div className="title2">{title} ({year})</div>
                            <div className="rAndG">
                                <div className="rating">⭐ {rating}</div>
                                <div className="genres">
                                    <div>📢</div>
                                    <div>
                                        {genres.map((g) => (
                                            <div key={g} className="genresInfo">{g}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="summary">
                        🎞 {summary.length > 720 ? `${summary.slice(0, 720)} ...` : summary}
                    </div> */}
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Movie2;


