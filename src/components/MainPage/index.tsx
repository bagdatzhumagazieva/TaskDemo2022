import React, {useState} from 'react';
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { AddNewEmployee } from "../EmployeeModal";
import { IEmployee, IRow, ETypes, COLUMNS } from "../../core";
import { DeleteModal } from "../DeleteModal";
import { useAppSelector } from "../../store";
import { UseEmployee } from "../../store/actions/employee";

export const MainPage: React.FC = () => {
    const [createModal, setCreateModal] = useState<boolean>(false);
    const [editEmployee, setEditEmployee] = useState<IRow>();
    const [deleteEmp, setDelete] = useState<IRow>();

    /** store */
    const { employees } = useAppSelector(
        (employeeState) => employeeState.employee
    );

    const { onCreateEmployee, onEditEmployee, onDelete } = UseEmployee();

    const onCreateEdit = (data: IEmployee) => (type: ETypes) => {
        if (type === ETypes.EDIT) {
            onEditEmployee(data);
            setEditEmployee(undefined);
        } else {
            onCreateEmployee(data);
        }
    };

    return (
        <>
            <Button variant="contained" onClick={() => setCreateModal(true)}>Add new employee</Button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={employees.map(e => ({...e, actionEdit: '', actionDelete: ''}))}
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
                    onDelete={() => onDelete(deleteEmp.id)}
                />
            )}

        </>
    );
}
