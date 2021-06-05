import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import bg from './images/bg.jpg'


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
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },

}));

const Home = props => {
  const p = 'Display Name'
  const classes = useStyles()
  console.log(props, "eerer");
  return (
    <div className={classes.root} style={{backgroundImage: "url(" + bg + ")", minHeight:'100vh'}} >
      <CssBaseline />
      <Grid container item xs={12} sm={6} component="main" className={classes.main} direction="column">
        <Typography variant="h3" component="h1" gutterBottom style={{ color: 'white' }}>
          Euro Fantasy League
          </Typography>
          {/* <Typography variant="h6" component="h1" style={{ color: 'white'}}>
                Score Board
              </Typography> */}
        <Grid container item xs={12} sm={6} style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
          {/* {props.db.Score.map(data => (
            <Grid container item xs={12} direction="row">
              <Typography variant="body1" style={{ color: 'white', width: '50%' }}>
                {data.display}
              </Typography>
              <Typography variant="body1" style={{ color: 'white', width: '50%' }}>
                {data.Score}
              </Typography>
            </Grid>
          ))} */}
        </Grid>
      </Grid>
      <footer className={classes.footer}>
        <Grid container item xs={12} direction="row" justify="space-between" spacing={1}>
          <Grid>
          {/* <Typography variant="body1">Click to play Euro fantasy League</Typography>
          <Button variant="contained" color="Secondary" target="_blank" href="https://forms.gle/UdMJetKaRWhRUmZV6" >
            Play
            </Button> */}
            </Grid>
            <Grid>
          <Typography variant="body1">Join Euro Fantasy League. Register to get started</Typography>
          <Button variant="contained" color="Primary" target="_blank" href="https://forms.gle/2GUgT3Ngvbo3PFi69" >
            Register
            </Button>
            </Grid>

        </Grid>
      </footer>
    </div>
  );
}


Home.propTypes = {
  db: PropTypes.shape({
    Score: PropTypes.arrayOf(PropTypes.object)
  })
};

export default withGoogleSheets('Score')(Home);
