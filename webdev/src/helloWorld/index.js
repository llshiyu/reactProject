import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

function HelloWorld() {
    return (
        <div>hello,{formatName(user)}</div>
    )
}

export default HelloWorld;
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
             alt={props.user.name}/>
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
        author={comment.author}/>,
    document.getElementById('component')
);


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: new Date()
        }
    }

    // 当组件输出到 DOM 后会执行 componentDidMount() 钩子
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    // 在 componentWillUnmount()生命周期钩子中卸载计时器：
    //一旦Clock组件被从DOM中移除，React会调用componentWillUnmount()这个钩子函数，定时器也就会被清除。
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            data: new Date()
        })
    }

    render() {
        return (
            <div>It is {this.state.data.toLocaleTimeString()}</div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('state')
);


function ActionLink() {
    return (
        <a href="#" onClick={handleClick}>click</a>
    );

    function handleClick(e) {
        e.preventDefault();
        console.log('click');
    }
}
class Toggle extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         isToggleOn: false
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick(){
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    handleClick = (t,e) => { //事件对象e要放在最后
        console.log('this is:', e,t);
    }
    // handleClick2() {
    //     console.log('this is:', this);
    // }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this,2323)}>
                    click
                    {/*{this.state.isToggleOn ? 'ON' : 'OFF'}*/}
                </button>
                {/*<button onClick={(e) => this.handleClick2(e)}>*/}
                    {/*Click me*/}
                {/*</button>*/}
            </div>

        )
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('event')
);


