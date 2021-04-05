import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const showTime = new Date().toLocaleTimeString();
const date  = new Date().toLocaleDateString();

const time = new Date().getHours();

let timeOfdate, color, symbol;

if(time >= 1 && time <= 11) {
	timeOfdate = "Morning";
	color = "#f6830f";
	symbol = '🌞';
}
else if(time >= 12 && time <= 19) {
	timeOfdate = "Afternoon";
	color = "#ff7e67";
	symbol = '🌄';
}
else {
	timeOfdate = "Night"
	color = "#393e46";
	symbol = '🌑';
}

const listOfDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const day = new Date().getDay();
const curDay = listOfDays[day];

function App() {
    return(
        <React.Fragment>
            <h1 style={{color: "white", textAlign: "center", fontFamily: "Train One, sans-serif"}}>
                Time: {showTime}
                <br />
                {curDay} {date}
            </h1>
        
            <div className="container">
                <h1 className="greet">Hello Sir, <span style={{color: color, fontFamily: 'Cabin, sans-serif', fontWeight: "bolder"}}>Good {timeOfdate}</span> {symbol}</h1>
            </div>
        </React.Fragment>
    );
}

export default App;