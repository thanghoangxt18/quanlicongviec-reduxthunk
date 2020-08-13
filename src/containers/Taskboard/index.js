import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import Button from '@material-ui/core/Button'
import Addicon from "@material-ui/icons/Add"
import Grid from '@material-ui/core/Grid';
import {STATUSES} from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as taskActions from './../../actions/task'
import * as modalActions from './../../actions/modal'
import PropTypes from 'prop-types'
import Box from "@material-ui/core/Box";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBox from "../../components/SearchBox";

class TaskBoard extends Component {

    state = {
        open: false
    }

    componentDidMount() {
        const {taskActions} = this.props   //goi den list cac hanh dong cua task
        const {fetchListTask} = taskActions // goi den action lay list
        fetchListTask()    //thuc thi hanh dong lay list do
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
        const {modalActions} = this.props
        const { showModal, changeModalTitle, changeModalContent}= modalActions
        showModal()
        changeModalTitle('Thêm mới công việc');
        changeModalContent(<TaskForm/>)
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

    handleFillter = (event) => {
        console.log('event:', event)
        const {value} = event.target
        const {taskActions} = this.props  //goi den list cac actions cua task
        const {fillterTask} = taskActions //goi ham chu chua excute
        fillterTask(value)    //execute function
    }

    renderSearchBox() {
        let xhtml = null
        xhtml = (
            <SearchBox handleChange={this.handleFillter}/>
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
                    className={classes.mr5}
                    onClick={this.ShowToast}
                >
                    Hien thi thong bao
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {this.renderForm()} {/* Ngay ban dau da render ra form nhung open = false nen no khong hien */}
            </div>
        )
    }
}

TaskBoard.propsTypes = {
    classes: PropTypes.object,
    taskActions: PropTypes.shape({
        fetchListTask: PropTypes.func,
        fillterTask: PropTypes.func
    }),
    listTask: PropTypes.array,
    modalActions: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func
    })
}

const mapStateToProps = state => {   //chuyen state cua store thang prop cua component
    return {
        listTask: state.task.listTask
    }
}

const mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch),   //actions theo huong module: module task
        modalActions: bindActionCreators(modalActions, dispatch)    //actions theo huong module: module task
    }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TaskBoard)
)