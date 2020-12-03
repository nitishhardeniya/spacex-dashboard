import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch';
import Grid from './Grid';

const Home = (props) => {
  console.log(props.results)
  return (
    <div className="main-container">
      <Head>
        <title>SpaceX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        SpaceX
      </h1>

      <Grid container direction="row">
        <Grid item xs={24} sm={24} md={4} lg={4} xl={4} className="filters">
kk
        </Grid>
        
        <Grid item xs={24} sm={24} md={20} lg={20} xl={20} className="programs">
          <Grid container justify="center" alignItems="center">
            {props.results.map(item => <Grid item xs={24} sm={24} md={6} lg={6} xl={6} key={item.mission_name}>
                <div className="margin-5 padding-20 sp-card">
                  <div className="grey-back">
                    <img width={200} height={200} src={item.links.mission_patch_small}></img>
                  </div>
                  
                  <div className="title">{item.mission_name}</div>
                </div>
              </Grid>)}
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

export default Home;