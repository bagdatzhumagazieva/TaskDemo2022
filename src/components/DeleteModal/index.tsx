import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface IProps {
    open: boolean;
    fullName: string;
    onCancel:() => void;
    onDelete:() => void;
}

export const DeleteModal = ({open, fullName, onCancel, onDelete}:IProps) => {

    const handleDel = () => {
        onDelete();
        onCancel();
    };

    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>Delete</DialogTitle>

            <DialogContent>
                Are you sure you want to delete the employee {fullName}?
            </DialogContent>

            <DialogActions>
                <Button onClick={onCancel} variant='contained'>Cancel</Button>
                <Button variant='contained' color='error' onClick={handleDel}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}
