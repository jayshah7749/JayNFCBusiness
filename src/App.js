import './App.css';
import { isMobile } from 'mobile-device-detect';

// <img src="https://picsum.photos/200/300" className="nue-button" alt=""></img>
function App() {
    return (
        <div>
            {
                isMobile ?
                    <div>
                        <div className="center-horizontal-div">
                            <img src="https://lh3.googleusercontent.com/9Sl2qYLZlWpmeyrftMT5LeE3OCiX0babupHu2j8vNF758wEa3NLXw4GED1d6lNVBArgOht33IgrniCWGYEBDIOYv7YkBNmQ-aSIEHQETUH1bRZ0boY9tw0xzT4vITHcBMQoSqOy1mkkG6ABTK03oLowTV48NUkQxSlzW-SDJPVNZoRsOhXjtYM5bwnHVptFIXs9zCak19QTJ0sbsNF2E_GvWv71Atc6N79S8wynDVgnJh9lgSZe1PNceIrzVFEgXjY9nRidRTsf3ipJrAnDibgD7g3Zs5KfI0Lvm06IzP3_raeNsBL1SGwN2qdD53rSqhp0TPVYoUW9COSOWd3mOcDjxe4NMKGganb2GLy_3RBr6uOoe3WZk9KTHXFuB3AW5XaL3wxCca6Ykce14HKfCh-zkMfa6UPjv-9PyyQzHJVuD9PC9O0V1eQ6Mlx0Qi2IF_iinG0qjv8NlSXntLGRCRm-XHbNFrcFfxo7x6ilPs7t4b7ryXEAXdCCJeQShMt403hQKxzjjLco3cgAUoL7u5qWWq7qLT0KMLQhp-V5PoA2D1ZnGMYpSjc0OXZBiG3qkKUOiC-pcmrb9dMGcIaY-rfrqIDtf1maBiKxzhOgeFtRkDPLCL0YaODWf-Da2fMwr8tdu1Cyxs24MQ34dnNbgjVhyPYU9D-Af5cscrZK-TEhro_8r-uJ5Y9IidfH1vazLmrxjdcZ94eEEIcjBvyKxwHP9TpzFounFyo62UkZn0xuK3MyqTI_dtXkxvJWw89bZUVNLUTRUX69oWq8Qh40TVk6r_L_kJPrVpMirtsKDvrTuonLC3sq7KQC2OS31NL0ep4NxJtGtyJgARRutFZAQcScC4d199ZzSUIe3Q5rwg7Jc3p66w_-mPuaIHoQxsBOZ8lXrbkvprrsHexWlOBVq29Pc-1hh_JtY6r6B1SlYoXp6sA=s548-no?authuser=0" className="nue-profile" alt=""/>
                        </div>
                        <div className="nue-bio">
                            <p>Hey there, it's <b><span style={{ color: "purple" }}>Viraj</span></b>! I currently work at <b><span style={{ color: "purple" }}>JPMorgan Chase & Co. as a Software Engineer</span></b>. This is my nfc profile page, feel free to click any of those buttons to <b><span style={{ color: "purple" }}>connect with me</span></b> via that network.</p>
                        </div>
                        <div className="center-horizontal-div">
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451245-b16f1c3c-bab4-49b6-ae84-e6eb1aece50c.png" alt=""/>
                            </div>
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215445843-427ba3b4-20eb-4fa1-990d-a3a445f028f6.png" alt=""/>
                            </div>
                        </div>
                        <div className="center-horizontal-div">
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451239-40337cff-e27e-4d43-b4c5-43a2b111da69.png" alt=""/>
                            </div>
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451249-b3842dc7-3f96-4fd7-9917-2d6f7aad6065.png" alt=""/>
                            </div>
                        </div>
                        <div className="center-horizontal-div">
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451247-e1e804d5-7128-4628-b739-1117552e1f99.png" alt=""/>
                            </div>
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451243-495feae0-e3cf-4286-ae67-17cf2d20230f.png" alt=""/>
                            </div>
                        </div>
                        <div className="center-horizontal-div">
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451234-050607bc-846f-4d6b-b899-c78a034c1c02.png" alt=""/>
                            </div>
                            <div className="nue-button">
                                <img className="img-icon" src="https://user-images.githubusercontent.com/37918393/215451235-3c63e708-6a0d-4053-8d4a-081443249838.png" alt=""/>
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