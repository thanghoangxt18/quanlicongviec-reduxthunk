import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Addicon from "@material-ui/icons/Add"
import Grid from '@material-ui/core/Grid';
import {STATUSES} from "../../constants";
import TaskList from "../../components/TaskList";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import TaskForm from "../../components/TaskForm";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as taskActions from './../../actions/task'
import PropTypes from 'prop-types'
import Box from "@material-ui/core/Box";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TaskBoard extends Component {

    state = {
        open: false
    }

    componentDidMount() {
        const {taskActions} = this.props   //goi den list cac hanh dong cua task
        const {fetchTaskListRequest} = taskActions // goi den action lay list
        fetchTaskListRequest()    //thuc thi hanh dong lay list do
    }

    renderBoard() {
        const {classes, listTask} = this.props
        let xhtml = null
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const fillterTask = listTask.filter(task => task.status === status.value)
                        return (
                            <TaskList
                                key={index}
                                tasks={fillterTask}
                                status={status}
                            />
                        )
                    })
                }
            </Grid>
        )
        return xhtml
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    openForm = () => {
        this.setState({
            open: true
        })
    }

    renderForm() {
        const {open} = this.state
        let xhtml = null
        xhtml = (
            <TaskForm
                open={open}
                onClose={this.handleClose}
            />
        )
        return xhtml
    }


    ShowToast = () => {
        toast.success('Success');
    }

    render() {
        const {classes} = this.props

        return (
            <div className={classes.taskBoard}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.openForm}
                >
                    <Addicon/>Thêm mới công việc
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.ShowToast}
                >
                    Hien thi thong bao
                </Button>

                {this.renderBoard()}
                {this.renderForm()}
            </div>
        )
    }
}

TaskBoard.propsTypes = {
    classes: PropTypes.object,
    taskActions: PropTypes.shape({
        fetchTaskListRequest: PropTypes.func
    }),
    listTask: PropTypes.array
}

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask
    }
}

const mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)    //actions theo huong module: module task
    }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TaskBoard)
)