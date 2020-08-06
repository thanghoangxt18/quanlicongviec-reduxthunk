import React, {Component} from 'react';
import Button from "@material-ui/core/Button"
import styles from "./styles"
import {withStyles} from '@material-ui/core'
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import TaskBoard from "../Taskboard";
import theme from "../../commons/theme"
import {Provider} from "react-redux"
import configStore from "../../redux/configStore";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const store = configStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <TaskBoard/>
                </ThemeProvider>
            </Provider>
        )
    }
}

export default withStyles(styles)(App)
