import React from 'react';
import ReactDOM from 'react-dom';

const pig = {
    pigHead: {
        head: "http://placekitten.com/g/64/64",
        eye: "pig eye",
        ear: "pig ear"
    },
    pigBody: "pig body"
}

function PigHead(props) {
    if (props.showPigHead) {
        return (
            <img className="PigHead" src={props.pigHead.head} alt=""/>
        );
    } else {
        return null;
    }
}

// class PigHead extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         if (this.props.showPigHead) {
//             return (
//                 <img className="PigHead" src={this.props.pigHead.head} alt=""/>
//             );
//         } else {
//             return null;
//         }
//     }
// }

function PigBody(props) {

    return (
        <div className="PigBody">
            <p>{props.pigHead.eye}</p>
            <p>{props.pigHead.ear}</p>
            <p>{props.pigBody}</p>
        </div>
    );
}

class Pig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date:new Date(),
            showPigHead:true
        };

        // This binding is necessary to make `this` work in the callback
        this.pigHeadShowHide = this.pigHeadShowHide.bind(this);
    }


    componentDidMount() {
        setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {

    }

    pigHeadShowHide() {
        this.setState(preState => ({
            showPigHead: !preState.showPigHead
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <div className="toggle-button" onClick={this.pigHeadShowHide}>click</div>
                <PigHead pigHead={pig.pigHead} showPigHead={this.state.showPigHead}/>
                <PigBody pigHead={pig.pigHead} pigBody={pig.pigBody}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Pig/>,
    document.getElementById("root")
);