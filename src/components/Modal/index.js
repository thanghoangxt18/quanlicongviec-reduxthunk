import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from './styles'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from "redux"
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import * as modalActions from './../../actions/modal'

class Modal extends Component {
    render() {
        const {classes, open, component, modalActionCreators, title } = this.props
        const {hideModal} = modalActionCreators
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>
                            {title}
                        </span>
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}

Modal.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    open: PropTypes.bool,
    component: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func
    })
}

const mapStateToProps = (state) => ({
    open: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component
})
const mapDispatchToProps = (dispatch) => ({
    modalActionCreators: bindActionCreators(modalActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
    withStyles(styles),
    withConnect
)(Modal);