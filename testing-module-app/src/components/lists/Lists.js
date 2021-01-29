import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DeleteBtn from '../deleteBtn/DeleteBtn';
import UpdateBtn from '../updateBtn/UpdateBtn';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '5%',    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '10.33%',
    flexShrink: 0,
    color: '#FFF',
    fontWeight: 'bold',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#FFF',
  },
  body: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '30.33%',
    flexShrink: 0,
  },
  secondaryBody: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionBody: {
    background: '#0059b3',
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary 
        className={classes.accordionBody}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            <PersonIcon />
          </Typography>
          <Typography className={classes.heading}>
            ID:
          </Typography>
          <Typography className={classes.secondaryHeading}>1</Typography>          
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            Name:
          </Typography>          
          <Typography className={classes.secondaryBody}>x</Typography>          
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.body}>
            E-mail:
          </Typography>
          <Typography className={classes.secondaryBody}>x</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.body}>
            Phone:
          </Typography>
          <Typography className={classes.secondaryBody}>x</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.body}>
            Code Postal:
          </Typography>
          <Typography className={classes.secondaryBody}>x</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.body}>
            Address:
          </Typography>
          <Typography className={classes.secondaryBody}>x</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.body}>
            Number:
          </Typography>
          <Typography className={classes.secondaryBody}>x</Typography>
        </AccordionDetails>
        <AccordionDetails>
        <Typography className={classes.body}>
            City:
          </Typography>
          <Typography className={classes.secondaryBody}>x</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.body}>
            Province:
          </Typography>
          <Typography className={classes.secondaryBody}>x</Typography>
        </AccordionDetails>
        <Divider />
        <AccordionDetails>
          <UpdateBtn /> 
          <DeleteBtn />  
        </AccordionDetails>           
      </Accordion>
      
    </div>
  );
}
