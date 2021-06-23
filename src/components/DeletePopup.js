import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const DeletePopup = ({isDeletePopupOpen, deletePopupOpenClose, deleteNote}) => {
    return (
        <Dialog open={isDeletePopupOpen} onClose={deletePopupOpenClose}>
                <DialogContent id={'delete-note?'}>
                    <DialogContentText>
                        Are you sure you want to delete your note?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={()=>{
                            deletePopupOpenClose()
                        }}
                    >No</Button>
                    <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={()=>{
                                deleteNote()
                                deletePopupOpenClose()
                            }}
                    >Yes</Button>
                </DialogActions>


        </Dialog>
    );
};

export default DeletePopup;