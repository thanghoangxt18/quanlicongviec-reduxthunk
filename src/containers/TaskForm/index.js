import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import {Modal, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import PropTypes from 'prop-types';
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import * as modalActions from './../../actions/modal'
import {reduxForm, Field} from 'redux-form'
//import {withReduxForm} from "redux-form/lib/ReduxFormContext";
import renderTextField from "../../components/FormHelper/TextField";

class TaskForm extends Component {
    render() {
        const {classes, modalActionCreators, handleSubmit } = this.props
        const {hideModal} = modalActionCreators
        return (
            <form>
                <Grid container>
                    <Grid item md={12}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Tiêu đề"
                            multiline
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Mô tả"
                            multiline
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button variant="contained" color="primary">Lưu Lại</Button>
                            </Box>
                            <Button variant="contained" onClick={hideModal}>Hủy Bỏ</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func
    })
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    modalActionCreators: bindActionCreators(modalActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const FORM_NAME = 'TASK_MANAGEMENT'

const withReduxForm = reduxForm({
    form: FORM_NAME
})

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(TaskForm)