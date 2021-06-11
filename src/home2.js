import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import bg from './images/b5.jpg'
import bgm from './images/bg4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    paddingLeft: '10px',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },

}));

const Home = props => {
  // const p = 'Display Name'
  const classes = useStyles()
  const imageUrl = window.innerWidth >= 650 ? bg : bgm; 
  return (
    <div className={classes.root} style={{backgroundImage: "url(" + imageUrl + ")", minHeight: (window.innerWidth < 650 ? '95vh' : '100vh')}} >
      <CssBaseline />
      <Grid container item xs={12} sm={6} component="main" className={classes.main} direction="column">
        <Typography variant={window.innerWidth >= 650 ? "h3" : "h5"}  gutterBottom style={{ color: 'rgba(255, 255, 255, 0.9)', backgroundColor:'rgba(6, 20, 40, 0.7)', textAlign:'center', marginRight:'10px'}}>
        Euro Prediction League
          </Typography>
          {props?.db?.score?.count > 0 && <Typography variant="h6" component="h1" style={{ color: 'white'}}>
                Score Board
              </Typography>}
        <Grid container item xs={12} sm={12} >
          {props.db.score.map(data => (
            <Grid container item xs={12} direction="row" style={{ backgroundColor: 'rgba(6, 20, 40, 0.7)', margin:'1px', marginRight:'10px'}} >
              <Typography variant="body1" style={{ color: 'white', width: '50%', paddingLeft:'10px'}}>
                {data.display}
              </Typography>
              <Typography variant="body1" style={{ color: 'white', width: '50%' }}>
                {data.Score ? data.Score : 0}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <footer className={classes.footer}>
        <Grid container item xs={12} direction="row" justify="space-around" spacing={2}>
          {/* <Grid item xs={12} sm ={4}> */}
            {/* <Typography variant="body1">Register to get started</Typography> */}
            {/* <Button style={{margin:'10px'}} variant="contained" color="Primary" target="_blank" href="https://forms.gle/2GUgT3Ngvbo3PFi69" >
              Register
            </Button> */}
          {/* </Grid>
          <Grid item xs={12} sm ={4}> */}
            {/* <Typography variant="body1">Click to play Euro fantasy League</Typography> */}
            <Button  style={{margin:'10px'}} variant="contained" color="secondary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeNTy7o69UP3JF-cesgoMHAnyRsSo3nYa32tVSSh95Uk9bqvg/viewform?usp=sf_link" >
              Play
            </Button>
          {/* </Grid> */}
                    {/* <Grid item xs={12} sm ={4}> */}
            {/* <Typography variant="body1">Register to get started</Typography> */}
            <Button style={{margin:'10px'}} variant="contained" color="primary" target="_blank" href="https://docs.google.com/spreadsheets/d/1lIdJ0FYHp-LA9fbTRiGLNjWX2iL4v9-Ao4swG_BOjvA/edit#gid=1339454246" >
              TODAYS PREDICTIONS
            </Button>
           {/* </Grid> */}
        </Grid>
      </footer>
    </div>
  );
}


Home.propTypes = {
  db: PropTypes.shape({
    score: PropTypes.arrayOf(PropTypes.object)
  })
};

export default withGoogleSheets('score')(Home);
// export default Home;

