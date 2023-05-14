import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import { useEffect } from "react";

import Home from "./routes/Home.js"
import Detail from "./routes/Detail.js"
import ScrollToTop from "./ScrollTop.js";

import insta from './img/insta.png'

function Movie() {
    useEffect(() => {
        const footer = document.querySelector('footer');
        if (Route === null) {
            footer.classList.add('no-content');
        }
    }, []);

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <a className="navbar-brand EUNFLEX" href="/">
                            EUNFLEX
                        </a>
                    </ul>
                </nav>
            </header>

            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/movie/:id`} element={<Detail />} />
                </Routes>
            </Router>

            <footer className={`footer ${Movie ? 'footerBottom' : ''}`}>
                <div>
                    <ul>
                        <a href='/#'> 고객센터 </a> |
                        <a href='/#'> 이용약관 </a> |
                        <a href='/#'> 개인정보처리방침 </a>
                    </ul>
                    <br />

                    <div>
                        <b> 이정은 </b><br />
                        email: <b> lucy2776@naver.com </b> | instagram:
                        &nbsp;
                        <a href='https://www.instagram.com/jung__eun007/'>
                            <img src={insta} alt='instagram' className='insta' />
                        </a>
                    </div>
                    <br />

                    <span>copyright © EUNFLEX All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
}

export default Movie;