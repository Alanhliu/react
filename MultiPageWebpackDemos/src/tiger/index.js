import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter, Route, Switch, Link } from 'react-router-dom';


/*条件渲染*/
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
//
// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );


/*温度基础版*/
// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>水会烧开</p>;
//     }
//     return <p>水不会烧开</p>;
// }
//
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {temperature: ''};
//     }
//
//     handleChange(e) {
//         this.setState({temperature: e.target.value});
//     }
//
//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>输入一个摄氏温度</legend>
//                 <input
//                     value={temperature}
//                     onChange={this.handleChange} />
//
//                 <BoilingVerdict
//                     celsius={parseFloat(temperature)} />
//
//             </fieldset>
//         );
//     }
// }
//
// ReactDOM.render(<Calculator/>,document.getElementById("root"));


/*温度升级版（状态提升 Lifting State Up）*/
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
//
// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }
//
// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>水会烧开</p>;
//     }
//     return <p>水不会烧开</p>;
// }
//
// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(e) {
//         this.props.onTemperatureChange(e.target.value);
//     }
//
//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>在{scaleNames[scale]}:中输入温度数值</legend>
//                 <input value={temperature}
//                        onChange={this.handleChange} />
//             </fieldset>
//         );
//     }
// }
//
// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// };
//
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = {temperature: '', scale: 'c'};
//     }
//
//     handleCelsiusChange(temperature) {
//         this.setState({scale: 'c', temperature});
//     }
//
//     handleFahrenheitChange(temperature) {
//         this.setState({scale: 'f', temperature});
//     }
//
//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//
//         return (
//             <div>
//                 <TemperatureInput
//                     scale="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleCelsiusChange} />
//
//                 <TemperatureInput
//                     scale="f"
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange} />
//
//                 <BoilingVerdict
//                     celsius={parseFloat(celsius)} />
//
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<Calculator/>,document.getElementById("root"));


/*children*/
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }
//
// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//         </FancyBorder>
//     );
// }
//
// ReactDOM.render(<WelcomeDialog/>,document.getElementById("root"));


/*类似Vue里的插槽*/
// function SplitPane(props) {
//     return (
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//                 {props.left}
//             </div>
//             <div className="SplitPane-right">
//                 {props.right}
//             </div>
//         </div>
//     );
// }
//
// function Contacts() {
//     return(
//         <div>This is Contacts</div>
//     );
// }
//
// function Chat() {
//     return(
//         <div>This is Chat</div>
//     );
// }
//
// function App() {
//     return (
//         <SplitPane
//             left={
//                 <Contacts />
//             }
//             right={
//                 <Chat />
//             }
//         />
//     );
// }
//
// ReactDOM.render(<App/>,document.getElementById("root"));


/*类似继承吧，但不是继承，是组合，FB特意强调不推荐继承 1*/
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }
//
// function Dialog(props) {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//         </FancyBorder>
//     );
// }
//
// function WelcomeDialog() {
//     return (
//         <Dialog
//             title="Welcome"
//             message="Thank you for visiting our spacecraft!" />
//
//     );
// }
//
// ReactDOM.render(<WelcomeDialog/>,document.getElementById("root"));


/*类似继承吧，但不是继承，是组合，FB特意强调不推荐继承 2*/
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }
//
// function Dialog(props) {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//             {props.children}
//         </FancyBorder>
//     );
// }
//
// class SignUpDialog extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSignUp = this.handleSignUp.bind(this);
//         this.state = {login: ''};
//     }
//
//     render() {
//         return (
//             <Dialog title="Mars Exploration Program"
//                     message="How should we refer to you?">
//                 <input value={this.state.login}
//                        onChange={this.handleChange} />
//
//                 <button onClick={this.handleSignUp}>
//                     Sign Me Up!
//                 </button>
//             </Dialog>
//         );
//     }
//
//     handleChange(e) {
//         this.setState({login: e.target.value});
//     }
//
//     handleSignUp() {
//         alert(`Welcome aboard, ${this.state.login}!`);
//     }
// }
//
// ReactDOM.render(<SignUpDialog/>,document.getElementById("root"));



/*路由*/
// For this demo, we are using the UMD build of react-router-dom
// const {
//     HashRouter,
//     Switch,
//     Route,
//     Link
// } = ReactRouterDOM

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.



const PlayerAPI = {
    players: [
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.players},
    get: function(id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>
    )
}

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
    <Switch>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={Player}/>
    </Switch>
)

const Schedule = () => (
    <div>
        <ul>
            <li>6/5 @ Evergreens</li>
            <li>6/8 vs Kickers</li>
            <li>6/14 @ United</li>
        </ul>
    </div>
)

const Home = () => (
    <div>
        <h1>Welcome to the Tornadoes Website!</h1>
    </div>
)

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
        </Switch>
    </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'))
