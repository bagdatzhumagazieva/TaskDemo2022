export interface IEmployee {
    id: number;
    name: string;
    surname: string;
    monthlySalary: number;
    earlySalary: number;
    taxesCompany: number;
    taxesEmployee: number;
}

export interface IRow extends IEmployee {
    actionEdit: string;
    actionDelete: string;
}
