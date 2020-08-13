import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import styles from './styles'

class TaskItem extends Component {
    render() {
        const {classes, task, status} = this.props
        return (
            <Card key={task.id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {task.title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="add">
                        <EditIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        Delete
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem)