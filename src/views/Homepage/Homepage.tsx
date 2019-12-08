import React from 'react';
import Container from '@material-ui/core/Container';
import SocialBar from '../../components/SocialBar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 'auto',
      width: '1024px',
      bckground: 'red'
    },
  }),
);

const Homepage = () : JSX.Element | null => {
  const classes = useStyles();
    return (
    <React.Fragment>
        <Container className={classes.container}>
          <SocialBar />
      </Container>
    </React.Fragment>
    )
}

export default Homepage;