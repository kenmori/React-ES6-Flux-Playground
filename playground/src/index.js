import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import ParentComponent from './component/ParentComponent';
import WipComponent from './component/WipComponent';

 const  HelloReact =  React.createClass({
  render() {
    return (
    <div>
        <div>
            <h1>React-Sample</h1>
            <p>To understand to make the small parts in many different ways~</p>
            <p>小さい部品を数多く違った方法で作って理解する</p>
            <p>Last Revision: 2016/07/03</p>
            <p>react 15.0.1</p>
            <p>react-router 2.5.2</p>
            <p>reat-modal 1.4.0</p>

          <ul className='flex lsn'>
            <li><p>blog: <a href="http://kenjimorita.jp/category/react-js">bukostunikki</a></p></li>
            <li><p>author: <a href="https://github.com/kenmori/React-ES6-Flux-Playground/tree/master/playground">kenmori</a></p></li>
          </ul>
            <ul className='lsn'>
            <li><Link to={`/about`}>about</Link></li>
            </ul>
        </div>
          <hr />
        <h2>React-Router</h2>
        <ul>
            <li>Please by pressing the wip。Please note that you have changed path of the url</li>
            <li>wipを押下してください。urlのpathが変わっていることに注意してください</li>
        </ul>
        <ul className='flex lsn'>
            <li><Link to='/' className='p10 block'>home</Link></li>
            <li><Link to='/wip' className='p10 block'>wip</Link></li>
        </ul>
          <hr />
        <div>
            {this.props.children }
        </div>
    </div>
    )
  }
 });


const  WorkingProgress =  React.createClass({
    render() {
        return (
            <div>
                <WipComponent />
            </div>
        )
    }
});

class Index extends Component {
    render() {
        return (
            <div>
            <ParentComponent />
            </div>
        );
    }
}

class PageB extends Component {
    render() {
        return <div>B</div>;
    }
}
//react-router setting
const NoMatch = React.createClass({
  render(){
    return (<div>routing NoMatch</div>)
  }
});

const Users = React.createClass({
  render(){
    return (
        <div>
            fafa
        </div>
    )
  }
});
const User = React.createClass({
  componentDidMount() {
    this.setState({
      user: findUserById(this.props.prams.userId)
    })
  },
  render(){
    return (
        <div>
          <h2>{this.state.user.name}</h2>
        </div>
    )
  }
});


ReactDOM.render(
    (
    <Router history={browserHistory}>
      <Route path='/' component={HelloReact}>
        <IndexRoute  component={Index}/>
        <Route path="/wip" component={WorkingProgress}/>
        <Route path="/b" component={PageB} />
      </Route>
      <Route path='*' component={NoMatch} />
    </Router>
), document.getElementById('content')
)
