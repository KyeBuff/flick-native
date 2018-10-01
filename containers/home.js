import { connect } from "react-redux";
import Home from "../screens/Home";
import { getMedia } from "../actions/api";

const mapStateToProps = state => {
    return {
        media:state.media
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMedia: () => dispatch(
        	getMedia() // Carry on getting media
        ) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);