import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import './lists.css';
import UpdateBtn from '../updateBtn/UpdateBtn';
import DeleteBtn from '../deleteBtn/DeleteBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginTop: '5%',
    background: '#6eaaff',
  },
  card: {
    background: '#45b3ff',
  },
  id: {
    color: 'white',
  },
  fields: {
    fontSize: 14,
    textAlign: 'left',
  },
  field1: {
    fontSize: 14,
    textAlign: 'left',
    marginTop: '3%',
  },
  field2: {
    marginLeft: '25%',
  },
  field3: {
    marginLeft: '25%',
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions className={classes.fields}>
        <PersonIcon />
        <span className={classes.id}>User ID:</span >
      </CardActions>
      <CardContent className={classes.card}>
        <Typography className={classes.fields}>
          <span className={classes.field1}>Name:</span>
          <span className={classes.field2}>E-mail:</span>
          <span className={classes.field3}>Phone:</span>
        </Typography>
        <Typography className={classes.field1}>
          <span>Address:</span >
          <span className={classes.field2}>Number:</span>
          <span className={classes.field3}>Postal Code:</span>
        </Typography>
        <Typography className={classes.field1}>
          <span>City:</span >
          <span className={classes.field2}>Province:</span>          
        </Typography>        
      </CardContent>
      <CardActions>
        <UpdateBtn /><DeleteBtn />
      </CardActions>
    </Card>
  );
}