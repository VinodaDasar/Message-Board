import React from 'react' 
import Messages from './components/Messages'

function App(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <a  href="#" class="text-decoration-none"><h1>Message Board</h1></a>
                </div>
            </div>
            
            <Messages/>
        </div>
    )
}

export default App 
