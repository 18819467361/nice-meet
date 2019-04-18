import * as React from 'react';
import './index.css';
import { Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom' // 解决组件拿不到路由对象的问题
import {RouterInterface} from "../../../constants/routeInterface";


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
    positionNum: number;
}


function loadScript() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js";
    document.body.appendChild(script);
}

// const qq = window.qq ? window.qq : null;
// const geolocation = new qq.maps.Geolocation("your key", "myapp");
let demoDom:any = null;
let areaDom:any = null;
class Location extends React.Component<Props,State> {

    constructor(props:any) {
        console.log("Initial render");
        console.log("constructor");
        super(props);
        this.state = {
            hidden: false,
            options: {timeout: 8000},
            positionNum: 0
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
        console.log("componentDidMount");
        demoDom = document.getElementById("demo") ? document.getElementById("demo") : null;
        areaDom = document.getElementById("pos-area") ? document.getElementById("pos-area") : null;
        loadScript()
        if(areaDom){
            areaDom.style.height = (document.body.clientHeight - 110) + 'px';
        }
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    showPosition(position:any) {
        if(demoDom){
            demoDom.innerHTML += "序号：" + this.state.positionNum+1;
            demoDom.appendChild(document.createElement('pre')).innerHTML = JSON.stringify(position, null, 4);
        }
        if(areaDom!=null){
            areaDom.scrollTop = areaDom.scrollHeight;
        }

        this.setState({positionNum:this.state.positionNum+1});
    }

    showErr() {
        if(demoDom){
            demoDom.innerHTML = "序号：" + this.state.positionNum+1;
            demoDom.appendChild(document.createElement('p')).innerHTML = "定位失败！";
        }
        if(areaDom){
            areaDom.scrollTop = areaDom.scrollHeight;
        }
        this.setState({positionNum:this.state.positionNum+1});
    }

    showWatchPosition() {
        if(demoDom){
            demoDom.innerHTML += "开始监听位置！<br /><br />";
        }
        if(areaDom){
            areaDom.scrollTop = areaDom.scrollHeight;
        }
        // geolocation.watchPosition(this.showPosition);
    }

    showClearWatch() {
        // geolocation.clearWatch();
        if(demoDom){
            demoDom.innerHTML += "停止监听位置！<br /><br />";
        }
        if(areaDom){
            areaDom.scrollTop = areaDom.scrollHeight;
        }
    }

    render() {
        // const {footerIndex,setFooterIndex,history} = this.props;
        console.log('nowProps', this.props);
        console.log('render!')

        return (
            <div style={{ width: '100%', height: '60%'}}>
                地图定位组件
                <div id="pos-area">
                    <p id="demo">点击下面的按钮，获得对应信息：<br /></p>
                </div>
                {/*<Button onClick={geolocation.getLocation(this.showPosition, this.showErr, this.state.options)}>获取精确定位信息</Button>*/}
                {/*<Button onClick={geolocation.getIpLocation(this.showPosition, this.showErr)}>获取粗糙定位信息</Button>*/}
                <Button onClick={this.showWatchPosition}>开始监听位置</Button>
                <Button onClick={this.showClearWatch}>停止监听位置</Button>
            </div>
        );
    }
}

export default withRouter(Location);


