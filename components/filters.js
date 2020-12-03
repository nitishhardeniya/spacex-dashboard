import Grid from './Grid';
const Filters = ({ filterByLaunch, filterByLanding }) => <Grid container>
    
    <Grid container>
        <Grid item className="padding-10" >Successful Launch</Grid>
        <Grid item xs={12}><div className="fl-buttons" onClick={()=>filterByLaunch(true)}>True</div></Grid>
        <Grid item xs={12}><div className="fl-buttons" onClick={()=>filterByLaunch(false)}>False</div></Grid>
    </Grid>

    <Grid container>
        <Grid item className="padding-10">Successful Landing</Grid>
        <Grid item xs={12}><div className="fl-buttons" onClick={()=>filterByLanding(true)}>True</div></Grid>
        <Grid item xs={12}><div className="fl-buttons" onClick={()=>filterByLanding(false)}>False</div></Grid>
    </Grid>
</Grid>;

export default Filters;