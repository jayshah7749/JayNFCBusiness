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
                    <div></div>
            }
        </div>
    )
}

export default App;
