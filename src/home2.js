import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import bg from './images/b5.jpg'
import bgm from './images/bg4.jpg'
import { Wave } from 'react-animated-text';
import ball from './images/ball1.gif'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    width: '100%'
  },
  main: {
    paddingTop: theme.spacing(8),
    // padddingBottom: theme.spacing(2),
    paddingLeft: '10px',
    display: 'flex',
    overflow: 'scroll',
    // flexDirection: 'column',
    // width:'100%',
  },
  footer: {
    padding: theme.spacing(3, 0),
    // // marginTop: 'auto',
    // backgroundColor: 'white',
    // // minHeight: (window.innerWidth < 650 ? '95vh' : '100vh')
  },

}));


const Home = props => {
  // const p = 'Display Name'
  const classes = useStyles()
  const imageUrl = window.innerWidth >= 650 ? bg : bgm;
  return (
    <div >
      <div className={classes.root} style={{ backgroundImage: "url(" + imageUrl + ")" }} >
        <CssBaseline />
        <Grid container item xs={12} sm={12} component="main" className={classes.main} direction="row" style={{ height: window.innerWidth >= 650 ? '90vh' : '80vh' }}>
          <Grid container item xs={12} sm={12} >
            <Grid item alignContent="flex-end">
              <img src={ball} alt="soccer" style={{ height: '70px' }} />
            </Grid>
            <Typography variant={window.innerWidth >= 650 ? "h3" : "h5"} gutterBottom style={{ color: 'rgba(255, 255, 255, 0.9)', backgroundColor: 'rgba(6, 20, 40, 0.7)', textAlign: 'center', marginRight: '10px' }}>
              <Wave text="Euro Prediction League" effect="pop" effectChange='2' iterations='1' />
            </Typography>
            {/* {props?.db?.score?.count > 0 && <Typography variant="h6" component="h1" style={{ color: 'white'}}>
                Score Board
              </Typography>} */}
          </Grid>
          <Grid container item xs={12} sm={12} >
            <Grid container item xs={6} sm={6} >
              <Grid container item xs={12} direction="row" style={{ backgroundColor: 'white', margin: '1px', marginRight: '10px' }} >
                <Typography variant="body1" style={{ color: 'rgba(6, 20, 40, 0.7)', width: '80%', paddingLeft: '10px' }}>
                  {'Knockout Score'}
                </Typography>
              </Grid>
              {props?.db?.score?.sort((a, b) => (b.knockout - a.knockout)).map(data => (
                <Grid container item xs={12} key={data.display} direction="row" style={{ backgroundColor: 'rgba(6, 20, 40, 0.7)', margin: '1px', marginRight: '10px' }} >
                  <Typography variant="body1" style={{ color: 'white', width: '80%', paddingLeft: '10px' }}>
                    {data.display}
                  </Typography>
                  <Typography variant="body1" style={{ color: 'white', width: '20%' }}>
                    {data.Score ? data.knockout : 0}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={6} sm={6} >
              <Grid container item xs={12} direction="row" style={{ backgroundColor: 'white', margin: '1px', marginRight: '10px' }} >
                <Typography variant="body1" style={{ color: 'rgba(6, 20, 40, 0.7)', width: '80%', paddingLeft: '10px' }}>
                  {'Overall Score'}
                </Typography>
              </Grid>
              {props?.db?.score?.sort((a, b) => (b.Score - a.Score)).map(data => (
                <Grid container item xs={12} key={data.display} direction="row" style={{ backgroundColor: 'rgba(6, 20, 40, 0.7)', margin: '1px', marginRight: '10px' }} >
                  <Typography variant="body1" style={{ color: 'white', width: '80%', paddingLeft: '10px' }}>
                    {data.display}
                  </Typography>
                  <Typography variant="body1" style={{ color: 'white', width: '20%' }}>
                    {data.Score ? data.Score : 0}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <footer className={classes.footer} >
        <Grid container item xs={12} direction="row" justify="space-around" spacing={2}>
          {/* <Grid item xs={12} sm ={4}> */}
          {/* <Typography variant="body1">Register to get started</Typography> */}
          {/* <Button style={{margin:'10px'}} variant="contained" color="Primary" target="_blank" href="https://forms.gle/2GUgT3Ngvbo3PFi69" >
              Register
            </Button> */}
          {/* </Grid>
          <Grid item xs={12} sm ={4}> */}
          {/* <Typography variant="body1">Click to play Euro fantasy League</Typography> */}
          {/* <Grid style={{alignSelf:'center'}}> */}
          <Button variant="contained" color="secondary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeNTy7o69UP3JF-cesgoMHAnyRsSo3nYa32tVSSh95Uk9bqvg/viewform?usp=sf_link" >
            Play
          </Button>
          {/* </Grid> */}
          {/* </Grid> */}
          {/* <Grid item xs={12} sm ={4}> */}
          {/* <Typography variant="body1">Register to get started</Typography> */}
          {/* <Grid style={{alignSelf:'center'}}> */}
          <Button variant="contained" color="primary" target="_blank" href="https://docs.google.com/spreadsheets/d/1lIdJ0FYHp-LA9fbTRiGLNjWX2iL4v9-Ao4swG_BOjvA/edit#gid=1339454246" >
            TODAYS PREDICTIONS
          </Button>

          {/* </Grid> */}

          {/* </Grid> */}
        </Grid>
      </footer>
    </div>
  );
}


Home.propTypes = {
  db: PropTypes.shape({
    score: PropTypes.arrayOf(PropTypes.object),
    knockout: PropTypes.arrayOf(PropTypes.object)
  })
};

export default withGoogleSheets('score')(Home);
// export default Home;

