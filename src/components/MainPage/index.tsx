import React, {useState} from 'react';
import {Button} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import {AddNewEmployee} from "../EmployeeModal";
import {IEmployee, IRow, ETypes, COLUMNS} from "../../core";
import {ROWS} from "./mock";
import {DeleteModal} from "../DeleteModal";


export const MainPage: React.FC = () => {
    const [createModal, setCreateModal] = useState<boolean>(false);
    const [editEmployee, setEditEmployee] = useState<IRow>();
    const [deleteEmp, setDelete] = useState<IRow>();
    const [state, setState] = useState<IRow[]>(ROWS);

    const onCreateEdit = (data: IEmployee) => (type: ETypes) => {
        if (type === ETypes.EDIT) {
            onEdit(data)
        } else {
            const newData = { ...data, id: state.length + 1, actionDelete: '', actionEdit: '' };
            setState([...state, newData]);
        }
    };

    const onEdit = (data: IEmployee) => {
        if (editEmployee) {
            const newList = state.map(e => e.id === editEmployee.id ? {...editEmployee, ...data} : e);
            setState(newList);
            setEditEmployee(undefined);
        }
    };

    const onDelete = () => {
        if (deleteEmp) {
            const index = state.findIndex(e => e.id === deleteEmp.id);
            const newData = [...state];
            newData.splice(index, 1);
            setState(newData);

            setDelete(undefined)
        }
    }

    return (
        <>
            <Button variant="contained" onClick={() => setCreateModal(true)}>Add new employee</Button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={state}
                    columns={COLUMNS(setEditEmployee, setDelete)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>

            <AddNewEmployee
                type={ETypes.CREATE}
                open={createModal}
                onClose={() => setCreateModal(false)}
                onClick={(e) => onCreateEdit(e)(ETypes.CREATE)}
            />

            {editEmployee !== undefined && (
                <AddNewEmployee
                    open
                    type={ETypes.EDIT}
                    initData={editEmployee}
                    onClose={() => setEditEmployee(undefined)}
                    onClick={(e) => onCreateEdit(e)(ETypes.EDIT)}
                />
            )}

            {deleteEmp !== undefined && (
                <DeleteModal
                    open
                    fullName={`${deleteEmp.name} ${deleteEmp.surname}`}
                     onCancel={() => setDelete(undefined)}
                    onDelete={onDelete}
                />
            )}

        </>
    );
}
