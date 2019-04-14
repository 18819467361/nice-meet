import * as React from 'react'
import Footer from '../containers/Footer'
import {Route} from 'react-router'
import SeekingFriend from '../components/seekingFriend'
import Seeking from '../components/seekingFriend/seek'
import Release from '../components/seekingFriend/release'
import {RouterInterface} from "../constants/routeInterface";

export interface Props extends RouterInterface{
    test?: string
}

class SeekingFriendWrapper extends React.Component<Props,any> {
    render() {
        const {match} = this.props;
        return (
            <div className="row">
                <SeekingFriend/>
                <div>
                    <Route path={`${match.url}/release`} component={Release} />
                    <Route path={`${match.url}/seeking`} component={Seeking} />
                </div>
                <Footer/>
            </div>

        );
    }
}

export default SeekingFriendWrapper
