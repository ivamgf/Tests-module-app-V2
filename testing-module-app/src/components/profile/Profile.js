import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const URLImage2 = `http://www.testing-module.orkneytech.com.br/assets/images/foto-1.jpg`;

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  media: {
    height: 140,
    width: 270
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={URLImage2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ivam Galvão Filho
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Front-End Developer Analyst with knowledge in Angular 10+ and React.js. 
          Writer with two books published in the areas of education and business.
          Scrum SFC certified professional, 
          Graduated in Analysis and Systems Development at University center Estácio de Sá, 
          Master in Knowledge Engineering at Federal University of Santa Catarina and graduating in 
          Bachelor of Mathematics at University center Estácio de Sá. 
          Currently it is among the 5% best developers in the world 
          according to CodersRank.io.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/contact">Contact</Link>
        </Button>
        <Button size="small" color="primary">
          <a href="http://portfolio.orkneytech.com.br/">Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
}