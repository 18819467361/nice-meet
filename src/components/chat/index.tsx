import * as React from 'react';
import './index.css';
import { Link } from 'react-router-dom'
import {RouterInterface} from "../../constants/routeInterface";
import { withRouter } from 'react-router-dom' // 解决组件拿不到路由对象的问题


// import { Button } from 'antd-mobile';


export interface Props extends RouterInterface{
    name?: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    onUp?: () => void;
    onDown?: () => void;
}
interface State {
    selectedCount?: number;
    selectedMoney?: number;
}

class Chat extends React.Component<Props, State> {// <a,b>定义props的类型（由父组件传入），b为this.state的接口定义其类型
    constructor(props:any) {
        super(props);
        this.state = {
            selectedCount: 0,
            selectedMoney: 0,
        };
    }
    render() {
        // const {name, enthusiasmLevel = 1,onIncrement,onDecrement,onUp,onDown} = this.props;
        // console.log(this.props,'props');
        // if (enthusiasmLevel <= 0) {
        //     throw new Error('You could be a little more enthusiastic. :D');
        // }
        console.log('component props:',this.props);
        const {match} = this.props;
        return (
            <div className="hello">
              聊天模块的父组件
                <Link to={`${match.url}/friendList`}>好友列表</Link>
                <Link to={`${match.url}/chatPage`}>聊天详情页</Link>
            </div>
        );
    }
}

export default withRouter(Chat)


