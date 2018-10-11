import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName+' '+user.lastName;
}
const user={
    firstName: 'Harper',
    lastName: 'Perez'
};
function HelloWorld() {
    return (
        <div>hello,{formatName(user)}</div>
    )
}

// class HelloWorld extends React.Component{
//     render(){
//         return(
//             <div>hello,{formatName(user)}</div>
//         )
//     }
// }
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

// setInterval(tick, 1000);

function formatDate(date) {
    return date.toLocaleDateString();
}
function UserInfo(props) {
    return (
        <div className="userInfo">
            <Avatar user={props.user}></Avatar>
            <div className="cserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
function Avatar(props) {
    return (
        <img className="avatar"
             src={props.user.avatarUrl}
             alt={props.user.name} />
    )
}
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author}></UserInfo>
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />,
    document.getElementById('component')
);

export default HelloWorld;