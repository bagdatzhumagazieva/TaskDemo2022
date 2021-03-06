import React from "react";
import {Button} from "@mui/material";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {IEmployee, IRow} from "../interfaces";

export const COLUMNS = (handleEdit: (v: IRow) => void, handleDel: (v: IRow) => void): GridColDef[] => [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'First name', width: 200 },
    { field: 'surname', headerName: 'Last name', width: 200 },
    { field: 'monthlySalary', headerName: 'Monthly salary ', type: 'number', width: 130 },
    {
        field: 'earlySalary',
        headerName: 'Early salary',
        type: 'number',
        width: 130,
    },
    {
        field: 'taxesCompany',
        headerName: 'Taxes paid by company ',
        width: 220,
        type: 'number',
    },
    {
        field: 'taxesEmployee',
        headerName: 'Taxes paid by employee ',
        width: 220,
        type: 'number',
    },
    {
        field: 'actionEdit',
        headerName: ' ',
        width: 120,
        renderCell: (params: GridValueGetterParams) => {
            return <Button
                color="secondary"
                variant="outlined"
                onClick={() => handleEdit(params.row)}
            >
                Edit
            </Button>
        },

    },
    {
        field: 'actionDelete',
        headerName: ' ',
        width: 120,
        renderCell: (params: GridValueGetterParams) => {
            return <Button color="error" variant="outlined" onClick={() => handleDel(params.row)}>Delete</Button>
        },
    }
];


export const INIT_EMPLOYEE: IEmployee = {
    id: 0,
    name: '',
    surname: '',
    monthlySalary: 0,
    earlySalary: 0,
    taxesCompany: 0,
    taxesEmployee: 0,
}
