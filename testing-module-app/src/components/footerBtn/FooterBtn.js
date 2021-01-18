import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './footerBtn.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      textAlign: 'center',
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <ButtonGroup
                    size="small"
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                >
                    <Button>Testing Module App Version 1.0.0</Button>
                    <Button>About</Button>
                </ButtonGroup>

                <ButtonGroup
                    size="small"
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                >
                    <Button></Button>
                </ButtonGroup>

                <ButtonGroup
                    size="small"
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                >
                    <Button>Powered By React.js</Button>
                    <Button>License By Creative Commons</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
            
    </div>
  );
}