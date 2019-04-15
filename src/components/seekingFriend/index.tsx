import * as React from 'react';
import './index.css';
// import { Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom' // 解决组件拿不到路由对象的问题



export interface Props {
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

class Hello extends React.Component<Props, State> {// <a,b>定义props的类型（由父组件传入），b为this.state的接口定义其类型
    constructor(props:any) {
        super(props);
        console.log('component props:',props)
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

        return (
            <div className="hello">
              遇见好友父组件
            </div>
        );
    }
}

export default withRouter(Hello);


