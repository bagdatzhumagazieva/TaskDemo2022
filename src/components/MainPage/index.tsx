import React from 'react';
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { COLUMNS } from "../../core/constants";

export const MainPage: React.FC = () => {

    const rows = [
        { id: 1, name: 'hello', surname: 'Snow',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 2, name: 'hello', surname: 'Lannister',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 3, name: 'hello', surname: 'Lannister',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 4, name: 'hello', surname: 'Stark',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 5, name: 'hello', surname: 'Targaryen',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 6, name: 'hello', surname: 'Melisandre',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 7, name: 'hello', surname: 'Clifford',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 8, name: 'hello', surname: 'Frances',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
        { id: 9, name: 'hello', surname: 'Roxie',monthlySalary: 120000, earlySalary: 120000,
            taxesCompany: 3000,   taxesEmployee: 2000, actionEdit: 'Edit', actionDelete: 'delete'},
    ];

    return (
        <>
            <Button variant="contained">Add new employee</Button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={COLUMNS}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </>
    );
}
