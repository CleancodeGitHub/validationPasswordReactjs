// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Validator from "./Validator";
import "./styles.css";



export default class  App extends React.Component {
    
    render() {
        return (
            
            <div>
              <Validator />
            </div>
        );
    }
}

 // Tale the react component and show it on the screen
 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 );
