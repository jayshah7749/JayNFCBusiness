import './App.css';
import { isMobile } from 'mobile-device-detect';
import { useEffect } from "react";

// <img src="https://picsum.photos/200/300" className="nue-button" alt=""></img>
function App() {
    useEffect(() => {
        console.log("Started")
    }, [])

    const goToURL = (service) => {
        switch(service) {
            case 'phone':
                window.open('tel:6145841947');
                break;
            case 'email':
                window.open('email:jayshah4339@gmail.com');
                break;
            case 'github':
                window.open('https://github.com/jayshah7749');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/jay-shah-008b7a28b/');
                break;
            default:
                console.log('No options selected. Try again.')
        }
    }

    return (
        <div>
            {
                isMobile ?
                    <div>
                        <div className="center-horizontal-div">
                            <img src="https://lh3.googleusercontent.com/9Sl2qYLZlWpmeyrftMT5LeE3OCiX0babupHu2j8vNF758wEa3NLXw4GED1d6lNVBArgOht33IgrniCWGYEBDIOYv7YkBNmQ-aSIEHQETUH1bRZ0boY9tw0xzT4vITHcBMQoSqOy1mkkG6ABTK03oLowTV48NUkQxSlzW-SDJPVNZoRsOhXjtYM5bwnHVptFIXs9zCak19QTJ0sbsNF2E_GvWv71Atc6N79S8wynDVgnJh9lgSZe1PNceIrzVFEgXjY9nRidRTsf3ipJrAnDibgD7g3Zs5KfI0Lvm06IzP3_raeNsBL1SGwN2qdD53rSqhp0TPVYoUW9COSOWd3mOcDjxe4NMKGganb2GLy_3RBr6uOoe3WZk9KTHXFuB3AW5XaL3wxCca6Ykce14HKfCh-zkMfa6UPjv-9PyyQzHJVuD9PC9O0V1eQ6Mlx0Qi2IF_iinG0qjv8NlSXntLGRCRm-XHbNFrcFfxo7x6ilPs7t4b7ryXEAXdCCJeQShMt403hQKxzjjLco3cgAUoL7u5qWWq7qLT0KMLQhp-V5PoA2D1ZnGMYpSjc0OXZBiG3qkKUOiC-pcmrb9dMGcIaY-rfrqIDtf1maBiKxzhOgeFtRkDPLCL0YaODWf-Da2fMwr8tdu1Cyxs24MQ34dnNbgjVhyPYU9D-Af5cscrZK-TEhro_8r-uJ5Y9IidfH1vazLmrxjdcZ94eEEIcjBvyKxwHP9TpzFounFyo62UkZn0xuK3MyqTI_dtXkxvJWw89bZUVNLUTRUX69oWq8Qh40TVk6r_L_kJPrVpMirtsKDvrTuonLC3sq7KQC2OS31NL0ep4NxJtGtyJgARRutFZAQcScC4d199ZzSUIe3Q5rwg7Jc3p66w_-mPuaIHoQxsBOZ8lXrbkvprrsHexWlOBVq29Pc-1hh_JtY6r6B1SlYoXp6sA=s548-no?authuser=0" className="nue-profile" alt=""/>
                        </div>
                        <div className="nue-bio">
                            <p><b><span style={{ color: "purple" }}>Jay Shah</span></b></p>
                        </div>
                        <div className="center-horizontal-div">
                            <div id="phone-btn" className="nue-button" onClick={() => { goToURL('phone') }}>
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451245-b16f1c3c-bab4-49b6-ae84-e6eb1aece50c.png" alt=""/>
                            </div>
                            <div className="nue-button" onClick={() => { goToURL('email') }}>
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215445843-427ba3b4-20eb-4fa1-990d-a3a445f028f6.png" alt=""/>
                            </div>
                        </div>
                        <div className="center-horizontal-div">
                            <div className="nue-button" onClick={() => { goToURL('github') }}>
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451239-40337cff-e27e-4d43-b4c5-43a2b111da69.png" alt=""/>
                            </div>
                            <div className="nue-button" onClick={() => { goToURL('linkedin') }}>
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451249-b3842dc7-3f96-4fd7-9917-2d6f7aad6065.png" alt=""/>
                            </div>
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