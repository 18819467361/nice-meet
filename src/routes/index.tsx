import * as React from 'react'
import {Route, Redirect} from 'react-router'
import {BrowserRouter, Switch} from 'react-router-dom'
import Hello from '../containers/Hello';


import SeekingFriend from './seekingFriend'
import Chat from './chat'
import FriendsDynamic from './friendsDynamic'
import UserCenter from './userCenter'

class App extends React.Component {
    redirect(){
      return <Redirect to="/seekingFriend"/>
    }
    render() {
        return (
            <BrowserRouter>
                <Hello/>
                <div>
                    <Route exact={true} path="/" render={this.redirect}/>
                    <Switch>
                        <Route path="/seekingFriend" component={SeekingFriend}/>
                        <Route path="/chat" component={Chat}/>
                        <Route path="/friendsDynamic" component={FriendsDynamic}/>
                        <Route path="/userCenter" component={UserCenter}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App