import * as React from 'react'
import {Route} from 'react-router'
import FriendList from '../components/chat/friendList'
import ChatPage from '../components/chat/chatPage'
import Chat from '../components/chat'
import {RouterInterface} from "../constants/routeInterFace";

export interface Props extends RouterInterface{
    test?: string
}
class ChatWrapper extends React.Component<Props,any> {

    render() {
        const {match} = this.props;
        return (
            <div className="row">
                <Chat/>
                <div>
                    <Route path={`${match.url}/friendList`} component={FriendList} />
                    <Route path={`${match.url}/chatPage`} component={ChatPage} />
                </div>
            </div>
        );
    }
}

export default ChatWrapper