import * as React from 'react'
import {Route} from 'react-router'
import FriendList from '../components/chat/friendList'
import ChatPage from '../components/chat/chatPage'
import Chat from '../components/chat'


class ChatWrapper extends React.Component {
    render() {
        return (
            <div className="row">
                <Chat/>
                <div>
                    <Route path={`/chat/friendList`} component={FriendList} />
                    <Route path={`/chat/chatPage`} component={ChatPage} />
                </div>
            </div>
        );
    }
}

export default ChatWrapper