import React, {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaInstagram, FaSpotify} from 'react-icons/fa'

function LandingPage() {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/reserve");
    }

    return (
        <div>
            <div className="header">
                <h1>DREAM CONCERT 2023</h1>
                <button onClick={onClickHandler}>Reserve Ticket</button>
            </div>
            <ul className="singers">
                <li>
                    <div className="content">
                        <h2>SALENA GOMEZ</h2>
                        <p>
                            My Mind & Me <br/>
                            Love You Like A Love Song <br/>
                            Lose You To Love Me <br />
                        </p>
                        <div className="sns">
                            <a href="https://www.instagram.com/selenagomez/"><FaInstagram color="lightgrey" size="30"/></a>
                            <a href="https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"><FaSpotify color="lightgrey" size="30"/></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h2>IU</h2>
                        <p>
                            Blueming <br/>
                            Strawberry Moon <br/>
                            Celebrity <br />
                        </p>
                        <div className="sns">
                            <a href="https://www.instagram.com/dlwlrma/"><FaInstagram color="lightgrey" size="30"/></a>
                            <a href="https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"><FaSpotify color="lightgrey" size="30"/></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h2>BILLIE EILISH</h2>
                        <p>
                            Bad Guy <br/>
                            idontwannabeyouanymore <br/>
                            Everything I Wanted <br />
                        </p>
                        <div className="sns">
                            <a href="https://www.instagram.com/billieeilish/"><FaInstagram color="lightgrey" size="30"/></a>
                            <a href="https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAHe"><FaSpotify color="lightgrey" size="30"/></a>

                        </div>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h2>ARIANA GRANDE</h2>
                        <p>
                            7 Rings <br/>
                            Thank U, Next <br/>
                            One Last Time <br />
                        </p>
                        <div className="sns">
                            <a href="https://www.instagram.com/arianagrande/"><FaInstagram color="lightgrey" size="30"/></a>
                            <a href="https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR"><FaSpotify color="lightgrey" size="30"/></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h2>JENNIE</h2>
                        <p>
                            SOLO <br/>
                            Shut Down <br/>
                            BOOMBAYAH <br />
                        </p>
                        <div className="sns">
                            <a href="https://www.instagram.com/jennierubyjane/"><FaInstagram color="lightgrey" size="30"/></a>
                            <a href="https://open.spotify.com/artist/250b0Wlc5Vk0CoUsaCY84M"><FaSpotify color="lightgrey" size="30"/></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default LandingPage;