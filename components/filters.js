import Grid from './Grid';
const Filters = (props) => <Grid container>
    
    <Grid container>
        <Grid item className="padding-10" >Successful Launch</Grid>
        <Grid item xs={12}><div className="fl-buttons">True</div></Grid>
        <Grid item xs={12}><div className="fl-buttons">False</div></Grid>
    </Grid>

    <Grid container>
        <Grid item className="padding-10">Successful Landing</Grid>
        <Grid item xs={12}><div className="fl-buttons">True</div></Grid>
        <Grid item xs={12}><div className="fl-buttons">False</div></Grid>
    </Grid>
</Grid>;

export default Filters;