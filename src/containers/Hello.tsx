import Hello from '../components/Hello';
import * as actions from '../actions/';
// import { StoreState } from '../types';
import { connect } from 'react-redux';
export function mapStateToProps(store:any) {
    return {
        // ...store,
        enthusiasmLevel:store.count.enthusiasmLevel,
        name: store.count.languageName,
    }
}
export function mapDispatchToProps(dispatch: any) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onUp: () => dispatch(actions.TestUp()),
        onDown: () => dispatch(actions.TestDown()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello);