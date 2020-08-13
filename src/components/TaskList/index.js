import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import styles from './styles'
import TaskItem from "../TaskItem";

class TaskList extends Component {
    render() {
        const {classes, tasks, status} = this.props
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <div className={classes.status}>{status.label}</div>
                <div className={classes.wrapper}>
                    {tasks.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                task={task}
                                status={status}
                            />
                        )
                    })}
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList)