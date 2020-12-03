import Grid from './Grid';
import React, { useState } from 'react';

const Filters = ({ filterByLaunch, filterByLanding }) => {
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

    return <Grid container>
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