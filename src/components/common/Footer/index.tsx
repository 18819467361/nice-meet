import * as React from 'react';
import './index.css';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom' // 解决组件拿不到路由对象的问题
import {RouterInterface} from "../../../constants/routeInterface";


// export interface Props{
export interface Props extends RouterInterface{
    name?: string;
    footerIndex?: string;
    enthusiasmLevel?: number;
    setFooterIndex: (footerIndex: string) => { type: string, footerIndex: string };
    push: (path: string) => void;
}

interface State {
    hidden?: boolean;
}

class Footer extends React.Component<Props,State> {

    constructor(props:any) {
        super(props);
        this.state = {
            hidden: false,
        };
    }


    renderContent(pageText:any) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                >
                    Click to show/hide tab-bar
                </a>
            </div>
        );
    }

    componentWillMount(){
        const {setFooterIndex,history} = this.props;
        const path = history.location.pathname;
        if(path.match('seekingFriend')){
            setFooterIndex('seekingFriend')
        }else if (path.match('chat')){
            setFooterIndex('chat')
        }else if (path.match('friendsDynamic')){
            setFooterIndex('friendsDynamic')
        }else if (path.match('userCenter')){
            setFooterIndex('userCenter')
        }
    }
    render() {
        const {footerIndex,setFooterIndex,history} = this.props;
        console.log('render!')

        // 跳转页面并设置tab栏的高亮
        function index1(){
            history.push('/seekingFriend');
            setFooterIndex('seekingFriend')
        }
        function index2(){
            history.push('/chat');
            setFooterIndex('chat')
        }
        function index3(){
            history.push('/friendsDynamic');
            setFooterIndex('friendsDynamic')
        }
        function index4(){
            history.push('/userCenter');
            setFooterIndex('userCenter')
        }
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={0}
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={footerIndex === 'seekingFriend'}
                        badge={1}
                        onPress={index1}
                        data-seed="logId"
                    />


                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={footerIndex === 'chat'}
                        onPress={index2}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot={true}
                        selected={footerIndex === 'friendsDynamic'}
                        onPress={index3}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={footerIndex === 'userCenter'}
                        onPress={index4}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(Footer);


