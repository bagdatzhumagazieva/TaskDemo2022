import { createStyles, makeStyles, Theme } from "@mui/material/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
       addButton: {
           marginBottom: theme.typography.pxToRem(24)
       }
    })
);
