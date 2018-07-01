import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

export default class Dog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="mainIco">

                </div>
                dog
            </div>
        )
    }
}

Dog.defaultProps = {
    title:'狗'
};

ReactDOM.render(<Dog/>, document.getElementById("root"));