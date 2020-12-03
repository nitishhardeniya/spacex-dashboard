import Grid from './Grid';
import React, { useState } from 'react';
const alllaunchYears = ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];

const Filters = ({ filterByLaunch, filterByLanding, filterByLaunchYear }) => {
    const [ launchYear, setLaunchYearFilter ] = useState(0);
    const [ launchFilter, setLaunchFilter ] = useState(false);
    const [ landingFilter, setLandingFilter ] = useState(false);

    const _filterByLaunch = (status) => {
        setLaunchFilter(status);
        filterByLaunch(status);
    }
    
    const _filterByLanding = (status) => {
        setLandingFilter(status);
        filterByLanding(status);
    }

    const _setLaunchYearFilter = (year) => {
        setLaunchYearFilter(year);
        filterByLaunchYear(year);
    }

    return <Grid container>
        <Grid container>
            <Grid item className="padding-10" >Launch Year</Grid>
            {alllaunchYears && alllaunchYears.map(year => <Grid item xs={12}><div className={`fl-buttons ${launchFilter ? "active":""}`} onClick={()=>_setLaunchYearFilter(year)}>{year}</div></Grid> )}
            {/* <Grid item xs={12}><div className={`fl-buttons ${launchFilter ? "active":""}`} onClick={()=>_setLaunchYearFilter(2019)}>2019</div></Grid>
            <Grid item xs={12}><div className={`fl-buttons ${!launchFilter ? "active":""}`} onClick={()=>_setLaunchYearFilter(2020)}>2020</div></Grid> */}
        </Grid>
        
        <Grid container>
            <Grid item className="padding-10" >Successful Launch</Grid>
            <Grid item xs={12}><div className={`fl-buttons ${launchFilter ? "active":""}`} onClick={()=>_filterByLaunch(true)}>True</div></Grid>
            <Grid item xs={12}><div className={`fl-buttons ${!launchFilter ? "active":""}`} onClick={()=>_filterByLaunch(false)}>False</div></Grid>
        </Grid>

        <Grid container>
            <Grid item className="padding-10">Successful Landing</Grid>
            <Grid item xs={12}><div className={`fl-buttons ${landingFilter ? "active":""}`} onClick={()=>_filterByLanding(true)}>True</div></Grid>
            <Grid item xs={12}><div className={`fl-buttons ${!landingFilter ? "active":""}`} onClick={()=>_filterByLanding(false)}>False</div></Grid>
        </Grid>
    </Grid>;
};

export default Filters;