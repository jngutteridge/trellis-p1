import React from "react";
import {connect} from "react-redux";
import {GET_ROOT_NODES, rootNodes} from "./NodeService";
import {APP_LOADING} from "../Core/CoreService";
import LoadingComponent from "../Core/LoadingComponent";

class NodeComponent extends React.Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        const {nodes, process} = this.props;
        if (nodes == null) {
            return;
        }
        console.log(nodes);
        if (process[GET_ROOT_NODES] === APP_LOADING) {
            return <LoadingComponent/>;
        }
        return (
            <ul>
                {nodes.map(node => (<li>{node.title}</li>))}
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    init: () => {
        dispatch(rootNodes());
    }
});

const mapStateToProps = state => ({
    nodes: state.node.nodes,
    process: state.load.process,
});

export default connect(mapStateToProps, mapDispatchToProps)(NodeComponent);
