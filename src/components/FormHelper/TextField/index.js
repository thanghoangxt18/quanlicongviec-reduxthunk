import React from "react";
import TextField from "@material-ui/core/TextField"
import PropTypes from 'prop-types'

const renderTextField = ({
                             label,
                             input,   //{/*Trong nay chua tat ca cac su kien cua input*/}
                             meta: {touched, invalid, error},  //validation cua redux form
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom} //Neu truyen vao prop id, thi no tu hieu id = {id}
    />
)

renderTextField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object

}

export default renderTextField