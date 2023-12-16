
import React from "react";
import './../styles/App.css';
import ClickCounter from './ClickCounter';
import ReactDOM from 'react-dom';


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <ClickCounter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
