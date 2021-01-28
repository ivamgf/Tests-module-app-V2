import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './queryTxt.css';
import QueryBtn from '../queryBtn/QueryBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '10%',
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',      
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-query" label="Search" /><QueryBtn />
    </form>
  );
}
