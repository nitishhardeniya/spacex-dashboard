import PropTypes from 'prop-types';
import Grid from './Grid';

const LaunchCard = ({ data: item }) => <Grid item xs={24} sm={24} md={6} lg={6} xl={6} key={item.mission_name}>
    <div className="margin-5 padding-20 sp-card">
      <div className="grey-back flex-container-center padding-20">
        <img width={200} height={200} src={item.links.mission_patch_small}></img>
      </div>
      
      <div className="title padding-10">{item.mission_name}</div>

      {item.mission_id && item.mission_id.length > 0 && <Grid container justify="space-between">
        <Grid item xs={12} className="label">Mission Ids</Grid>
        <Grid item xs={12} className="sp-value">
            <ul>
              {item.mission_id.map(mission => <li key={mission}>{mission}</li>)}
            </ul>
          </Grid>
      </Grid>}

      <Grid container justify="space-between">
        <Grid item xs={12} className="label">Launch Year</Grid>
        <Grid item xs={12} className="sp-value">{item.launch_year}</Grid>
      </Grid>

      <Grid container justify="space-between">
        <Grid item xs={12} className="label">Successful Launch</Grid>
        <Grid item xs={12} className="sp-value">{item.launch_success ? "Yes" : "No"}</Grid>
      </Grid>

      <Grid container justify="space-between">
        <Grid item xs={12} className="label">Successful Landing</Grid>
        <Grid item xs={12} className="sp-value">{item.launch_success ? "Yes" : "No"}</Grid>
      </Grid>

    </div>
  </Grid>;

export default LaunchCard;

LaunchCard.PropTypes = {
    data: PropTypes.object
}