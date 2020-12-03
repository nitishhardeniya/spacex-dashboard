import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';
import Grid from './Grid';
import LaunchCard from './launchcard';

const Home = (props) => {
  // console.log(props.results)
  const { results } = props;
  return (
    <div className="main-container">
      <Head>
        <title>SpaceX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="sp-header-title padding-20">
        SpaceX Launch Programs
      </h1>

      <Grid container direction="row">
        <Grid item xs={24} sm={24} md={4} lg={4} xl={4} className="filters">
        </Grid>
        <Grid item xs={24} sm={24} md={20} lg={20} xl={20} className="programs">
          <Grid container justify="center" alignItems="center">
            {results.map(item => <LaunchCard data={item} />)}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches?limit=100");
  const datajson = await res.json();
  return { results: datajson}
}

Home.PropTypes = {
  results: PropTypes.array,
}

export default Home;