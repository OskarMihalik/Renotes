import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // margin: '12px 0px',
        textTransform: 'none',
    },
    element: {
        transform: "rotate(-90deg)",
        margin: '12px 0px',
        padding: '12px 0px',
        maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px',
        fontSize:10
    }
}))
//find some way to resize material ui button
const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.element}>Notes</Button>
            <Button className={classes.element}>Export</Button>
        </div>
    );
};

export default Sidebar;