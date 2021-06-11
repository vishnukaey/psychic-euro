import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';
const a = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQPHRwmwLkPFuDe-zIISn5nHgCFmWFp0oKvsvgYa3kTqYCcraDAKMpHoPw__e9qtAayGJEpOCdOnRDc/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
const Home = props => (
  <div>
    {props.db.Sheet1.map(data => (
      <div>{data.Name}</div>
    ))}
  </div>
  // <iframe src={a}></iframe>
);

Home.propTypes = {
  db: PropTypes.shape({
    Sheet1: PropTypes.arrayOf(PropTypes.object)
  })
};

export default withGoogleSheets('Sheet1')(Home);
