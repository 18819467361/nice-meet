import Hello from '../components/hello';
import * as actions from '../actions/';
import { connect } from 'react-redux';
export function mapStateToProps(store:any) {
    // console.log('store:',store)// 通过provider+connect provider让根组件下的组件，能配合connect，拿到redux的store，相当于将store挂着到全局，根组件下的所有子组件均能拿到store
    return {
        enthusiasmLevel:store.count.enthusiasmLevel,
        name: store.count.languageName,
    }
}
export function mapDispatchToProps(dispatch: any) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onUp: () => dispatch(actions.testUp()),
        onDown: () => dispatch(actions.testDown()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
