import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Social Profile
        </Typography><br />        
        <Typography variant="body2" component="p">
          <LinkedInIcon  /> 
          <a href="https://www.linkedin.com/in/ivam-galv%C3%A3o-filho-0218b9b0/">Linkedin Profile</a>          
        </Typography>
        <Typography variant="body2" component="p">
          <GitHubIcon  /> 
          <a href="https://github.com/ivamgf">GitHub Profile</a>          
        </Typography>
        <Typography variant="body2" component="p">
          <LanguageIcon  /> 
          <a href="http://portfolio.orkneytech.com.br/">Portfolio</a>          
        </Typography>
        <Typography variant="body2" component="p">
          <DescriptionIcon  /> 
          <a href="https://drive.google.com/file/d/19LBLcjK2vu1nLpJX4W-_YdUlNdFiiBq8/view?usp=sharing">Resume</a>          
        </Typography>
      </CardContent>
    </Card>
  );
}