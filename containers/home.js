import { connect } from "react-redux";
import Home from "../screens/Home";

const mapStateToProps = state => {
    return {
        media:state.media
    };
};

export default connect(mapStateToProps)(Home);