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
    this._filterByLaunchYear = this._filterByLaunchYear.bind(this);
    this._filterByLanding = this._filterByLanding.bind(this);
    this._filterByLaunch = this._filterByLaunch.bind(this);
  }

  async _filterByLanding(val) {
    const res = await fetch(`${LAUNCHES}&launch_success=${val}`);
    const landFilteredData = await res.json();                
    // console.log(landFilteredData);
    this.setState({
      results: landFilteredData
    })
  }

  async _filterByLaunch(val) {
    const res = await fetch(`${LAUNCHES}&land_success=${val}`);
    const launchFilteredData = await res.json();                
    // console.log(launchFilteredData);
    this.setState({
      results: launchFilteredData
    })
  }

  async _filterByLaunchYear(year) {
    // console.log(year)
    const res = await fetch(year === "All" ? LAUNCHES :`${LAUNCHES}&launch_year=${year}`);
    const launchYearFilteredData = await res.json();                
    // console.log(launchFilteredData);
    this.setState({
      results: launchYearFilteredData
    })
  }

  render() {
    const { results } = this.state;
    return (
      <div className="main-container">
        <Head>
          <title>SpaceX</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="sp-header-title padding-20">
          SpaceX Launch Programs
        </div>

        <Grid container direction="row">
          <Grid item xs={24} sm={24} md={4} lg={4} xl={4} className="filters padding-10">
            <Filters filterByLaunchYear={this._filterByLaunchYear} filterByLaunch={this._filterByLaunch} filterByLanding={this._filterByLanding} />
          </Grid>
          <Grid item xs={24} sm={24} md={20} lg={20} xl={20} className="launches">
            <Grid container justify="center" alignItems="center">
              {results && results.length > 0 ? results.map(item => <LaunchCard data={item} />) : <div className="no-data">No launches found</div>}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Home.getInitialProps = async () => {
  const res = await fetch(LAUNCHES);
  const datajson = await res.json();
  return { results: datajson}
}

Home.PropTypes = {
  results: PropTypes.array,
}

export default Home;