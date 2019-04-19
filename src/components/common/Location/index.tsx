import * as React from 'react';
import './index.css';
import { Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom' // 解决组件拿不到路由对象的问题
import {RouterInterface} from "../../../constants/routeInterface";
// import {func} from "prop-types";
// import QMap from 'QMap'
// declare global {
//     interface window {
//         qq: any
//     }
// }
export interface Props extends RouterInterface{
    name?: string;
    footerIndex?: string;
    enthusiasmLevel?: number;
    setFooterIndex: (footerIndex: string) => { type: string, footerIndex: string };
    push: (path: string) => void;
}

interface State {
    hidden?: boolean;
    options: any;
    geolocation: any;
    address: any;
}

class Location extends React.Component<Props,State> {
    constructor(props:any) {
        super(props);
        this.state = {
            hidden: false,
            options: {timeout: 8000},
            geolocation: {},
            address: '未定位'
        };
    }
    componentWillMount(){
        console.log("componentWillMount");

    }
    componentWillReceiveProps(nextProps:Props) {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentDidMount() {
        this.setState({geolocation : new (window as any).qq.maps.Geolocation("JEIBZ-3ZE64-2ORUZ-DCGLU-BYN5S-FIFSM", "myapp")});// (window as any)解决TS报错问题})
        console.log("componentDidMount");

    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    showPosition(position:any) {
        console.log('定位成功:',position)
        this.setState({address:JSON.stringify(position)})

    }

    showErr() {
        console.log('定位失败！')
    }

    showWatchPosition() {
        const that:any = this;
        return () => {
            that.state.geolocation.watchPosition(that.showPosition.bind(that));
        }
    }
    getLocation(){
        const that:any = this;
        return () => {
            that.state.geolocation.getLocation(that.showPosition.bind(that), that.showErr, that.state.options);
        }
    }
    getIpLocation() {
        const that:any = this;
        return () => {
            that.state.geolocation.getIpLocation(that.showPosition.bind(that), that.showErr);
        }
    }

    showClearWatch() {
        const that:any = this;
        return () => {
            that.state.geolocation.clearWatch();
        }
    }

    render() {

        return (
            <div style={{ width: '100%', height: '60%'}}>
                地图定位组件
                <div id="pos-area">
                    <p id="demo">点击下面的按钮，获得对应信息：<br /></p>
                </div>
                <div>{this.state.address}</div>
                <Button onClick={this.getLocation()}>获取精确定位信息</Button>
                <Button onClick={this.getIpLocation()}>获取粗糙定位信息</Button>
                <Button onClick={this.showWatchPosition()}>开始监听位置</Button>
                <Button onClick={this.showClearWatch()}>停止监听位置</Button>
            </div>
        );
    }
}

export default withRouter(Location);


