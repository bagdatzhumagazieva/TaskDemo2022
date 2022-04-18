import React, {useState} from 'react';
import {Button} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import {COLUMNS} from "../../core/constants";
import {AddNewEmployee} from "../AddNewEmployee";
import {IEmployee, IRow} from "../../core/interfaces";
import {ROWS} from "./mock";
import {ETypes} from "../../core/enums";


export const MainPage: React.FC = () => {
    const [createModal, setCreateModal] = useState<boolean>(false);
    const [editEmployee, setEditEmployee] = useState<IRow>();
    const [state, setState] = useState<IRow[]>(ROWS);

    const onCreateEdit = (data: IEmployee) => (type: ETypes) => {
        if (type === ETypes.EDIT) {
            onEdit(data)
        } else {
            setState([...state, { ...data, id: state.length + 1, actionDelete: '', actionEdit: '' }]);
        }
    };

    const onEditClick = (v: IRow) => {
        setEditEmployee(v);
    }

    const onEdit = (data: IEmployee) => {
        if (editEmployee) {
            const newList = state.map(e => e.id === editEmployee.id ? {...editEmployee, ...data} : e);
            setState(newList);
            setEditEmployee(undefined);
        }
    }

    return (
        <>
            <Button variant="contained" onClick={() => setCreateModal(true)}>Add new employee</Button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={state}
                    columns={COLUMNS(onEditClick)}
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
                    type={ETypes.EDIT}
                    initData={editEmployee}
                    open={editEmployee !== undefined}
                    onClose={() => setEditEmployee(undefined)}
                    onClick={(e) => onCreateEdit(e)(ETypes.EDIT)}
                />
            )}

        </>
    );
}
