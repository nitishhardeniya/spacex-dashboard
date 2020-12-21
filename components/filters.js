import React, { useState } from 'react';
import Grid from './Grid';
import { LAUNCH_YEARS as alllaunchYears } from './../constants';

const Filters = ({ filterLaunches }) => {
  const [launchYear, setLaunchYearFilter] = useState('All');
  const [launchFilter, setLaunchFilter] = useState(null);
  const [landingFilter, setLandingFilter] = useState(null);

  const _filterByLaunch = (status) => {
    if(launchFilter === status &&  launchFilter !== null) {
      setLaunchFilter(null);
      filterLaunches(launchYear, null, landingFilter);
    } else {
      setLaunchFilter(status);
      filterLaunches(launchYear, status, landingFilter);
    }
  };

  const _filterByLanding = (status) => {
    if(landingFilter === status && landingFilter !== null) {
      setLandingFilter(null);
      filterLaunches(launchYear, launchFilter, null);
    } else {
      setLandingFilter(status);
      filterLaunches(launchYear, launchFilter, status);
    }
  };

  const _setLaunchYearFilter = (year) => {
    if(launchYear === year) {
      setLaunchYearFilter('All');
      filterLaunches('All', launchFilter, landingFilter);
    } else {
      setLaunchYearFilter(year);
      filterLaunches(year, launchFilter, landingFilter);
    }
  };

  return (
    <Grid container>
      <Grid container justify="space-between">
        <Grid item className="fl-label">Launch Year</Grid>
        {alllaunchYears && alllaunchYears.map((year) => <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <div className={`fl-buttons ${launchYear === year ? "active" : ""}`} onClick={() => _setLaunchYearFilter(year)}>{year}</div>
        </Grid>)}
        {/* <Grid item xs={12}><div className={`fl-buttons ${launchFilter ? "active":""}`} onClick={()=>_setLaunchYearFilter(2019)}>2019</div></Grid>
            <Grid item xs={12}><div className={`fl-buttons ${!launchFilter ? "active":""}`} onClick={()=>_setLaunchYearFilter(2020)}>2020</div></Grid> */}
      </Grid>

      <Grid container justify="space-between">
        <Grid item className="fl-label">Successful Launch</Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}><div className={`fl-buttons ${launchFilter !== null && launchFilter ? "active" : ""}`} onClick={() => _filterByLaunch(true)}>True</div></Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}><div className={`fl-buttons ${launchFilter !== null &&  !launchFilter ? "active" : ""}`} onClick={() => _filterByLaunch(false)}>False</div></Grid>
      </Grid>

      <Grid container justify="space-between">
        <Grid item className="fl-label">Successful Landing</Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}><div className={`fl-buttons ${landingFilter !== null &&  landingFilter ? "active" : ""}`} onClick={() => _filterByLanding(true)}>True</div></Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}><div className={`fl-buttons ${landingFilter !== null && !landingFilter ? "active" : ""}`} onClick={() => _filterByLanding(false)}>False</div></Grid>
      </Grid>
    </Grid>
  );
};

export default Filters;
