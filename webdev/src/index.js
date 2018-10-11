import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Game from './game/index';
import NewGame from './game/game';
import HelloWorld from './helloWorld/index';
import hello from './helloWorld/hello';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
ReactDOM.render(
    <NewGame />,
    document.getElementById('newGame')
);

ReactDOM.render(
    hello,
    document.getElementById('hello')
);
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('helloWorld')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
