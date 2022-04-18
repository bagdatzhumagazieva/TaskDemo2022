import { useSnackbar } from "notistack";
import { IEmployee } from "../../core/interfaces";
import { employeeSlice } from "../reducer";
import { store } from "../store";

export interface IUseEmployee {
    onCreateEmployee: (data: IEmployee) => void;
    onEditEmployee: (data: IEmployee) => void;
    onDelete: (id: number) => void;
}

export const UseEmployee = (): IUseEmployee => {

    const { setDelete, setEditEmployee, setCreateEmployee } = employeeSlice.actions

    const { enqueueSnackbar } = useSnackbar();

    const onCreateEmployee = (data: IEmployee) => {
        store.dispatch(setCreateEmployee(data));
        enqueueSnackbar("Employee successfully added!", { variant: "success" });
    }

    const onEditEmployee = (data: IEmployee) => {
        store.dispatch(setEditEmployee(data));
        enqueueSnackbar("Employee`s data successfully edited!", { variant: "success" });
    }

    const onDelete = (id: number) => {
        store.dispatch(setDelete(id));
        enqueueSnackbar("Employee successfully deleted", { variant: "error" });
    };

    return { onCreateEmployee, onEditEmployee, onDelete }
};

