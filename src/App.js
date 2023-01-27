import './App.css';
import { isMobile } from 'mobile-device-detect';

// <img src="https://picsum.photos/200/300" className="nue-button" alt=""></img>
function App() {
    return (
        <div>
            {
                isMobile ?
                    <div>
                        <img src="https://picsum.photos/200/300" className="nue-profile" alt=""></img>
                        <div className="nue-bio"></div>
                        <div className="nue-button"></div>
                        <div className="nue-button"></div>
                        <div className="nue-button"></div>
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