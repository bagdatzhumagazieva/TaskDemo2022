import React from "react";
import {Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button} from "@mui/material";
import {Controller, useForm } from "react-hook-form";
import {IEmployee, ETypes, INIT_EMPLOYEE} from "../../core";

interface IProps {
    open: boolean;
    type: ETypes;
    initData?: IEmployee;
    onClose(): void;
    onClick(v: IEmployee): void;
}

export const AddNewEmployee = ({open, type, initData, onClose, onClick}:IProps) => {

    const methods = useForm<IEmployee>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: type === ETypes.CREATE ? INIT_EMPLOYEE : (initData || INIT_EMPLOYEE),
    });

    const inputs = [
        {
            id: '1',
            name: 'name',
            placeholder: 'First name',
            validate: () => methods.getValues('name') !== '',
        },
        {
            id: '2',
            name: 'surname',
            placeholder: 'Last name',
            validate: () => methods.getValues('surname') !== '',
        },
        {
            id: '3',
            name: 'monthlySalary',
            placeholder: 'Monthly Salary',
            validate: () => methods.getValues('monthlySalary') > 0,
        },
        {
            id: '4',
            name: 'earlySalary',
            placeholder: 'Early Salary',
            validate: () => methods.getValues('earlySalary') > 0,
        },
        {
            id: '5',
            name: 'taxesCompany',
            placeholder: 'Taxes paid by company ',
            validate: () => methods.getValues('taxesCompany') > 0,
        },
        {
            id: '6',
            name: 'taxesEmployee',
            placeholder: 'Taxes paid by employee ',
            validate: () => methods.getValues('taxesEmployee') > 0,
        },
    ];

    const handleClick = () => {
        const {name, surname,monthlySalary} = methods.getValues()
        if (name && surname && monthlySalary) {
            const data = methods.getValues();
            onClick(data);
            handleClose();
        }
    };

    const handleClose = () => {
        onClose();
        methods.reset(INIT_EMPLOYEE)
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create new employee</DialogTitle>

            <DialogContent>
                {inputs.map((input) => (
                    <Controller
                        key={input.id}
                        defaultValue=""
                        control={methods.control}
                        // @ts-ignore
                        name={input.name}
                        render={({
                             field: { onChange, onBlur, value, ref },
                             fieldState: { invalid },
                         }) => (
                            <TextField
                                variant="outlined"
                                fullWidth
                                value={value || ''}
                                inputRef={ref}
                                error={invalid}
                                onBlur={onBlur}
                                onChange={(e) =>
                                    (input.name === 'name' || input.name === 'surname')
                                        ? onChange(e)
                                        : onChange(parseInt(e.target.value, 10))
                                }
                                placeholder={input.placeholder}
                                label={input.placeholder}
                                style={{ margin: '8px 0' }}
                            />
                        )}
                        rules={{ validate: () => input.validate() }}
                    />
                ))}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant='contained' onClick={handleClick}>{type}</Button>
            </DialogActions>
        </Dialog>
    )
}
