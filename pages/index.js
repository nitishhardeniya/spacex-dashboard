import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import { LAUNCHES } from './../config';
import Grid from '../components/Grid';
import LaunchCard from '../components/launchcard';
import Filters from '../components/filters';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.results
    }
    this._filterLaunches = this._filterLaunches.bind(this);
  }

  async _filterLaunches(year, launched, landed) {
    // console.log(year,launched,landed);
    let URL = LAUNCHES;
    if(year !== "All") {
      URL += `&launch_year=${year}`;
    }
    if(launched !== null) {
      URL += `&launch_success=${launched}`;
    }
    if(landed !== null) {
      URL += `&land_success=${landed}`;
    }
    const res = await fetch(URL);
    const launchYearFilteredData = await res.json();                
    // console.log(launchFilteredData);
    this.setState({
      results: launchYearFilteredData
    }) 
  }

  render() {
    const { results } = this.state;
    return (
      <Grid container className="main-container" justify="center">
       <Grid item xs={24} sm={24} md={24} lg={18} xl={18}>
        <Head>
            <title>SpaceX</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="sp-header-title padding-20">
            SpaceX Launch Programs
          </div>

          <Grid container direction="row" className="padding-t-10">
            <Grid item xs={24} sm={24} md={4} lg={4} xl={4} className="filters padding-10">
              <Filters filterLaunches={this._filterLaunches} />
            </Grid>
            <Grid item xs={24} sm={24} md={20} lg={20} xl={20} className="launches">
              <Grid container>
                {results && results.length > 0 ? results.map(item => <LaunchCard data={item} />) : <div className="no-data">No launches found</div>}
              </Grid>
            </Grid>
          </Grid>
       </Grid>
      </Grid>
    )
  }
}

Home.getInitialProps = async () => {
  const res = await fetch(LAUNCHES);
  const datajson = await res.json();
  return { results: datajson}
}

Home.propTypes = {
  results: PropTypes.array,
}

export default Home;