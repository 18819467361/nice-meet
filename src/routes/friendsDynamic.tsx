import * as React from 'react'
// import {Route,Link,Switch} from 'react-router'
// import {HashRouter, Switch} from 'react-router-dom'
import DynamicList from '../components/friendsDynamic/dynamicList'
import PersonalDynamic from '../components/friendsDynamic/personalDynamic'
import FriendsDynamic from '../components/friendsDynamic'
import {RouterInterface} from "../constants/routeInterface";
import {Route} from 'react-router'

export interface Props extends RouterInterface{
    test?: string
}


class FriendsDynamicRouter extends React.Component<Props,any> {
    render() {
        const {match} = this.props;
        return (
            <div className="row">
                <FriendsDynamic/>
                <div>
                    <Route path={`${match.url}/personalDynamic`} component={PersonalDynamic} />
                    <Route path={`${match.url}/dynamicList`} component={DynamicList} />
                </div>
            </div>
        );
    }
}

export default FriendsDynamicRouter
