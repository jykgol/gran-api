import './App.css';
import AuthContainer from './components/Auth/AuthContainer';
import LeftSideContainer from "./components/Left_Side/LeftSideContainer"
import MessagesPageContainer from './components/RightSide/MessagesPageContainer';
function App(props) {

    return (
        <div className="App">
            <div className="App-wraper">
                <header className="App_header">
                    Web WhatsApp React Asssiting Tool
                </header>
                <div className="App_content">
                    <div className="App_left_side">
                        <LeftSideContainer />
                    </div>
                    <div className="App_right_side">
                        <MessagesPageContainer />
                    </div>
                </div>
                <AuthContainer/>
            </div>
        </div>
    );
}

export default App;
