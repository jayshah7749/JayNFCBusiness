import './App.css';
import { isMobile } from 'mobile-device-detect';

// <img src="https://picsum.photos/200/300" className="nue-button" alt=""></img>
function App() {
    return (
        <div>
            {
                isMobile ?
                    <div>
                        <img src="https://lh3.googleusercontent.com/9Sl2qYLZlWpmeyrftMT5LeE3OCiX0babupHu2j8vNF758wEa3NLXw4GED1d6lNVBArgOht33IgrniCWGYEBDIOYv7YkBNmQ-aSIEHQETUH1bRZ0boY9tw0xzT4vITHcBMQoSqOy1mkkG6ABTK03oLowTV48NUkQxSlzW-SDJPVNZoRsOhXjtYM5bwnHVptFIXs9zCak19QTJ0sbsNF2E_GvWv71Atc6N79S8wynDVgnJh9lgSZe1PNceIrzVFEgXjY9nRidRTsf3ipJrAnDibgD7g3Zs5KfI0Lvm06IzP3_raeNsBL1SGwN2qdD53rSqhp0TPVYoUW9COSOWd3mOcDjxe4NMKGganb2GLy_3RBr6uOoe3WZk9KTHXFuB3AW5XaL3wxCca6Ykce14HKfCh-zkMfa6UPjv-9PyyQzHJVuD9PC9O0V1eQ6Mlx0Qi2IF_iinG0qjv8NlSXntLGRCRm-XHbNFrcFfxo7x6ilPs7t4b7ryXEAXdCCJeQShMt403hQKxzjjLco3cgAUoL7u5qWWq7qLT0KMLQhp-V5PoA2D1ZnGMYpSjc0OXZBiG3qkKUOiC-pcmrb9dMGcIaY-rfrqIDtf1maBiKxzhOgeFtRkDPLCL0YaODWf-Da2fMwr8tdu1Cyxs24MQ34dnNbgjVhyPYU9D-Af5cscrZK-TEhro_8r-uJ5Y9IidfH1vazLmrxjdcZ94eEEIcjBvyKxwHP9TpzFounFyo62UkZn0xuK3MyqTI_dtXkxvJWw89bZUVNLUTRUX69oWq8Qh40TVk6r_L_kJPrVpMirtsKDvrTuonLC3sq7KQC2OS31NL0ep4NxJtGtyJgARRutFZAQcScC4d199ZzSUIe3Q5rwg7Jc3p66w_-mPuaIHoQxsBOZ8lXrbkvprrsHexWlOBVq29Pc-1hh_JtY6r6B1SlYoXp6sA=s548-no?authuser=0" className="nue-profile" alt=""></img>
                        <div className="nue-bio"></div>
                        <div className="center-horizontal-div">
                            <div className="nue-button"></div>
                            <div className="nue-button"></div>
                        </div>
                        <div className="center-horizontal-div">
                            <div className="nue-button"></div>
                            <div className="nue-button"></div>
                        </div>
                        <div className="center-horizontal-div">
                            <div className="nue-button"></div>
                            <div className="nue-button"></div>
                        </div>
                    </div> :
                    <div className="nue-bio">
                        <h4>
                            You can only access this site in a mobile browser.
                        </h4>
                    </div>
            }
        </div>
    )
}

export default App;