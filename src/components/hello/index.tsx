import * as React from 'react';
import './index.css';
// import { Button } from 'antd-mobile';
import { Button } from 'antd-mobile';


export interface Props {
    name: string;
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
        const {name, enthusiasmLevel = 1,onIncrement,onDecrement,onUp,onDown} = this.props;
        // console.log(this.props,'props');
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <Button type="ghost">small</Button>
                    <button className={'haha'} onClick={onDecrement}>-</button>
                    <button className={'haha'} onClick={onIncrement}>+</button>
                    <button className={'haha'} onClick={onUp}>up</button>
                    <button className={'haha'} onClick={onDown}>down</button>
                </div>
            </div>
        );
    }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}