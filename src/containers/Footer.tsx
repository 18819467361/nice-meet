import Footer from '../components/common/Footer';
import * as actions from '../actions/footer';
import {connect} from "react-redux";
export function mapStateToProps(store:any) {
    return {
        footerIndex:store.footer.footerIndex,
        history: {
            push: (path:string) => {
                console.log('path:',path)
            }
        }
    }
}
export function mapDispatchToProps(dispatch: any) {
    return {
        setFooterIndex: (footerIndex:string) => dispatch(actions.changeFooterIndex(footerIndex)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
