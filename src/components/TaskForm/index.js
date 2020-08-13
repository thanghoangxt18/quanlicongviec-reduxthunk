import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import {Modal, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import PropTypes from 'prop-types';

class TaskForm extends Component {
    render() {
        const {classes} = this.props
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
                            <Button variant="contained" >Hủy Bỏ</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(TaskForm)