import PropTypes from "prop-types"
import { useEffect } from "react"

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}

function Movie({ title, year, medium_cover_image, genres, summary }) {
    const onError = (e) => {
        e.target.src = "./404.jpg"
    }
    // useEffect(() => {
    //     onError()
    // }, [])

    return (
        <div>
            <h3>{title} ({year})</h3>
            <img src={medium_cover_image} alt={medium_cover_image} onError={onError} />
            {genres !== null ?
                <ul>
                    {genres.map((g) => (
                        <li key={g}> {g} </li>
                    ))}
                </ul> : null}
            <p>{summary}</p>
        </div>
    )
}

export default Movie;