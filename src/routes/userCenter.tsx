import * as React from 'react'
import {Route} from 'react-router'
import UserFunction from '../components/userCenter/userFunction'
import UserBaseInfo from '../components/userCenter/userBaseInfo'
import UserCenter from '../components/userCenter'
import {RouterInterface} from "../constants/routeInterface";
import Footer from '../containers/Footer'

export interface Props extends RouterInterface{
    test?: string
}

class UserCenterWrapper extends React.Component<Props,any> {
    render() {
        const {match} = this.props;
        return (
            <div className="row">
                <UserCenter/>
                <div>
                    <Route path={`${match.url}/friendList`} component={UserFunction} />
                    <Route path={`${match.url}/userBaseInfo`} component={UserBaseInfo} />
                </div>
                <Footer push={this.props.history.push}/>
            </div>
        );
    }
}

export default UserCenterWrapper
