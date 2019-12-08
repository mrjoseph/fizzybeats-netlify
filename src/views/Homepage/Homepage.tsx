import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SocialBar from '../../components/SocialBar';

const Homepage = () : JSX.Element | null => {
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <SocialBar />
      </Container>
    </React.Fragment>
    )
}

export default Homepage;