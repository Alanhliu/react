import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class LionEye extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>狮子的{this.props.lionEye}</h1>
        )
    }
}

class LionEar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>狮子的{this.props.lionEar}</h1>
        )
    }
}

class LionNose extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>狮子的{this.props.lionNose}</h1>
        )
    }
}

class Lion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            type : 0,
            lion_style:'lion_style1'
        }



        this.change = this.change.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.state.type);
    }

    componentWillUnmount() {

    }

    // https://segmentfault.com/q/1010000011552193
    // https://www.cnblogs.com/danceonbeat/p/6993674.html
    change() {
        // 错误的方式
        // this.setState(preState => {
        //     type: (preState.type++)%3;
        // })

        //正确的方式
        this.setState(function(state) {
            return {
                type: (state.type + 1)%3,
                lion_style:'lion_style'+((state.type + 1)%3+1)
            }
        },()=> {
            console.log('lion_style'+((this.state.type + 1)%3+1));
        });

        // this.setState((state)=> {
        //     return {type: (state.type + 1)%3}
        // });

        //修改后直接输出type
        // this.setState({type:2});
        // console.log(this.state.type);

        //修改后在回调中输出type
        // this.setState({type:2},()=> {
        //     console.log(this.state.type);
        // });
    }

    render() {
        //条件渲染

        // if (this.state.type == 1) {
        //     return(
        //         <div>
        //             <LionEye lionEye={"眼睛"}/>
        //         </div>
        //     );
        // } else if (this.state.type == 2) {
        //     return(
        //         <div>
        //             <LionEar lionEar={"耳朵"}/>
        //         </div>
        //     );
        // } else if (this.state.type == 3) {
        //     return(
        //         <div>
        //             <LionNose lionNose={"鼻子"}/>
        //         </div>
        //     );
        // } else {
        //     return null;
        // }

        // return(
        //     <div>
        //         <div onClick={this.change}>
        //             click to change + {this.props.title}
        //         </div>
        //         <div className={this.state.lion_style}>
        //             {(()=> {
        //                 if (this.state.type == 0) {
        //                     return <LionEye lionEye={"眼睛"}/>;
        //                 } else if (this.state.type == 1) {
        //                     return <LionEar lionEar={"耳朵"}/>;
        //                 } else if (this.state.type == 2) {
        //                     return <LionNose lionNose={"鼻子"}/>;
        //                 } else {
        //                     return null;
        //                 }
        //             })()}
        //         </div>
        //     </div>
        // );

        // return (
        //     <div>
        //         {(() => {
        //             switch (this.state.type) {
        //                 case 1:
        //                     return <LionEye lionEye={"眼睛"}/>;
        //                 case 2:
        //                     return <LionEar lionEar={"耳朵"}/>
        //                 case 3:
        //                     return <LionNose lionNose={"鼻子"}/>
        //                 default:
        //                     return null;
        //             }
        //         })()}
        //     </div>
        // );

        // return(
        //     <div>
        //         {(()=> {
        //             return <LionEye lionEye={"眼睛"}/>;
        //         })()}
        //     </div>
        // );

        // return (
        //     <div>
        //         {function () {
        //             return <LionEye lionEye={"眼睛"}/>;
        //         }()}
        //     </div>
        // );


        //列表
        //in-depth explanation on the negative impacts of using an index as a key
        // const lionList = this.props.lions.map((name,index)=> (
        //     <li key={index}>{name}</li>
        // ));
        // return(
        //     <ul>
        //         {lionList}
        //     </ul>
        // );

        return(
            <div>
                <div className="lion_title">
                    <h2>{this.props.title}</h2>
                </div>
                <ul className="lion_list">
                    {this.props.lions.map((name)=>(
                        <li key={name}><span>{name}</span></li>
                    ))}
                </ul>
            </div>
        );
    }
}

// https://www.jianshu.com/p/29a025128990
Lion.defaultProps = {
    title:'狮子',
    lions:['狮子1','狮子2','狮子3']
};

ReactDOM.render(<Lion/>, document.getElementById("root"));