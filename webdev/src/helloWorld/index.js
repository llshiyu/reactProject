import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

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

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number}>{number}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('list')
);

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            desc:'',
            type:'3',
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleName = this.handleName.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        console.log('name:'+this.state.name+' desc:'+this.state.desc+' type:'+this.state.type);
        console.log('isGoing:'+this.state.isGoing+' numberOfGuests:'+this.state.numberOfGuests);
        e.preventDefault();
    }
    handleName(e){
        this.setState({
            name: e.target.value
        });
        // console.log('change name:'+e.target.value+' '+e.target.value.toUpperCase());
    }
    handleDesc(e){
        this.setState({
            desc: e.target.value
        });
    }
    handleType(e){
        this.setState({
            type: e.target.value
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className='form-box'>
                <label htmlFor="name">
                    name： <input type="text" value={this.state.name} onChange={this.handleName}/>
                </label>
                <label htmlFor="desc">
                    desc：
                    <textarea name="desc" id="" cols="30" rows="10" value={this.state.desc} onChange={this.handleDesc}></textarea>
                </label>
                <label htmlFor="type">
                    type：
                    <select name="type" value={this.state.type} onChange={this.handleType}>
                        <option value="1">type1</option>
                        <option value="2">type2</option>
                        <option value="3">type3</option>
                        <option value="4">type4</option>
                    </select>
                </label>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value='submit'/>
            </form>
        )
    }
}
ReactDOM.render(
    <NameForm />,
    document.getElementById('form')
);