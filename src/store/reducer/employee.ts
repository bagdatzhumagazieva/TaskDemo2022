import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IEmployee} from "../../core/interfaces";
import {ROWS} from "../../components/MainPage/mock";

interface IEmployeeSlice {
    employees: IEmployee[];
}

const initialState: IEmployeeSlice = {
    employees: ROWS
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setEmployeeList(state, action: PayloadAction<IEmployee[]>) {
            state.employees = action.payload;
        },
        setCreateEmployee(state, action: PayloadAction<IEmployee>) {
            state.employees = [...state.employees, { ...action.payload, id: state.employees[state.employees.length-1].id + 1 }];
        },
        setEditEmployee(state, action: PayloadAction<IEmployee>) {
            const n = action.payload;
            state.employees = state.employees.map(e => e.id === n.id ? n : e);
        },
        setDelete(state, action: PayloadAction<number>) {
            const index = state.employees.findIndex(e => e.id === action.payload);
            const newData = [...state.employees];
            newData.splice(index, 1);
            state.employees = newData;
        }
    }
});
