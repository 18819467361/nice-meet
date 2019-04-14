import * as React from 'react';
import './index.css';
import { TabBar } from 'antd-mobile';
// import {func} from "prop-types";

export interface Props {
    name?: string;
    footerIndex?:string;
    enthusiasmLevel?: number;
    setFooterIndex: (footerIndex:string) => {type:string,footerIndex:string};
}
interface State {
    selectedTab?: string;
    hidden?: boolean;
}

class Footer extends React.Component<Props,State> {
    constructor(props:any) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }
    // changePage(){
    //     console.log(123)
    // }


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

    render() {
        const {footerIndex,setFooterIndex} = this.props;
        function index1(){
            // const {setFooterIndex} = this.props;
            // setFooterIndex( 'blueTab')
            setFooterIndex('blueTab')
        }
        function index2(){
            // const {setFooterIndex} = this.props;
            // setFooterIndex( 'blueTab')
            setFooterIndex('redTab')
        }
        function index3(){
            // const {setFooterIndex} = this.props;
            // setFooterIndex( 'blueTab')
            setFooterIndex('greenTab')
        }
        function index4(){
            // const {setFooterIndex} = this.props;
            // setFooterIndex( 'blueTab')
            setFooterIndex('yellowTab')
        }
        // console.log(this.props,'propsssss')
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
                        selected={footerIndex === 'blueTab'}
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
                        selected={footerIndex === 'redTab'}
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
                        selected={footerIndex === 'greenTab'}
                        onPress={index3}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={footerIndex === 'yellowTab'}
                        onPress={index4}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Footer;


