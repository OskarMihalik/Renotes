import React from 'react';
import Popup from "reactjs-popup";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        background: 'white',
        padding: '20px 20px'
    },
    buttonYes: {
        margin: theme.spacing(1),
        gridRow: "2/2",
        gridColumn: "3/4"
    },
    buttonNo: {
        margin: theme.spacing(1),
        gridRow: "2/2",
        gridColumn: "0/1"
    },
    text:{
        gridColumn: "1/4"
    }
}));

const DeletePopup = ({isDeletePopupOpen, deletePopupOpenClose, deleteNote}) => {
    const classes = useStyles();

    return (
        <Popup open={isDeletePopupOpen}>
            <div className={classes.root}>
                <span className={classes.text}> Are you sure you want to delete your note? </span>
                <Button className={classes.buttonYes}
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={()=>{
                            deleteNote()
                            deletePopupOpenClose()
                        }}
                >Yes</Button>
                <Button className={classes.buttonNo}
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={()=>{
                            deletePopupOpenClose()
                        }}
                >No</Button>
            </div>
        </Popup>
    );
};

export default DeletePopup;