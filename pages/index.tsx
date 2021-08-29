import Head from 'next/head';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import { Nav } from 'src/components/organisms';
import Rocket from 'src/components/atoms/Rocket';

const useStyles = makeStyles((theme) => ({
  heroSectionContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },

    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },

    '& > :first-child': {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      '& > :not(:last-child)': {
        paddingBottom: theme.spacing(2),
      },
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Material ui template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Container>
          <Grid container spacing={3} className={classes.heroSectionContainer}>
            <Grid item sm={12} md={6}>
              <Typography variant="h2">
                Turn your ideas into <br /> a{' '}
                <Typed
                  strings={['startup.', 'future.', 'success.']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </Typography>
              <Typography>
                __ will make your product look modern and professional while saving you precious
                time.
              </Typography>
              <div>
                <Button variant="contained">1</Button>
                <Button variant="contained">2</Button>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <Rocket />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
