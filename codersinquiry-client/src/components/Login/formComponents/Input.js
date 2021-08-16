import React,{ forwardRef } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
        margin: theme.spacing(1),
    },
}))
const Input = forwardRef((props, ref) => {
    const styles = useStyles();
    return (
        <TextField 
            className={styles.root}
            margin="normal"
            ref={ref}
            fullWidth
            {...props}
        />    
    )
});

export default Input