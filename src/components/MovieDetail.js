import PropTypes from "prop-types"

import '../css/Detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap'

MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

function MovieDetail({ title, year, medium_cover_image, download_count, genres, summary, description_intro, description_full }) {
    // const onError = (e) => {
    //     e.target.src = "./404.jpg"
    // }

    return (
        <div>
            <h1 className="Dtitle"><b>📽 {title} ({year})</b></h1>
            <div className="DimgAndGenres">
                <img src={medium_cover_image} alt={medium_cover_image} />
                <div className="Dgenres">
                    <p className="downloadCountT">Download Count : <b className="downloadCountC">{download_count}</b></p>
                    <div>
                        <span>📢</span>
                        {genres.map((g) => (
                            <p key={g} className="DgenresInfo"> {g} </p>
                        ))}
                    </div>
                </div>
            </div>
            <h4>🖋 Description Intro</h4>
            <p>&nbsp;{description_intro}</p>
            <h4>🖋 Description Full</h4>
            <p>&nbsp;{description_full}</p>
        </div>
    )
}

export default MovieDetail;