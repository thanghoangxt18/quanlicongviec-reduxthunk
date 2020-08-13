import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles"
import {TextField} from '@material-ui/core'
import PropTypes from "prop-types"
import style from './style'

class SearchBox extends Component {
    render() {
        const {classes,handleChange} = this.props
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    autoComplete="off"
                    className={classes.textField}
                    onChange={handleChange}
                    margin="normal"
                    placeholder="Nhap tu khoa"
                >
                </TextField>
            </form>
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
}

export default withStyles(style)(SearchBox)