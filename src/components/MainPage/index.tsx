import React, {useState} from 'react';
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { COLUMNS } from "../../core/constants";
import {AddNewEmployee} from "../AddNewEmployee";
import {IEmployee} from "../../core/interfaces";
import {ROWS} from "./mock";

interface IRow extends IEmployee {
    actionEdit: string;
    actionDelete: string;
}

export const MainPage: React.FC = () => {
    const [createModal, setCreateModal] = useState<boolean>(false);
    const [state, setState] = useState<IRow[]>(ROWS);

    const onCreate = (data: IEmployee) => {
        setState([...state, { ...data, id: state.length + 1, actionDelete: '', actionEdit: '' }]);
    };

    return (
        <>
            <Button variant="contained" onClick={() => setCreateModal(true)}>Add new employee</Button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={state}
                    columns={COLUMNS}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>

            <AddNewEmployee
                open={createModal}
                onClose={() => setCreateModal(false)}
                onClick={onCreate}
            />
        </>
    );
}
