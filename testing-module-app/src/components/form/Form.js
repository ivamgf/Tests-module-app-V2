import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './form.css';
import RegisterBtn from '../../components/registerBtn/RegisterBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField required id="standard-name" label="Name:" />
      <TextField required id="standard-email" label="E-mail:" type="email" />
      <TextField id="standard-phone" label="phone:" />
      <TextField id="standard-address" label="Address:" />
      <TextField id="standard-number" label="Number:" type="number" />
      <TextField id="standard-city" label="City:" />
      <TextField id="standard-province" label="Province:" />
      <TextField id="standard-postalcode" label="Postal Code" />
      <RegisterBtn />
    </form>    
  );
}