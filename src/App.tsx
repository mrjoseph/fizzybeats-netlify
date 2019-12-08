import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Homepage from './views/Homepage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="App">
        <CssBaseline />
        <Homepage />
      </div>
    </React.Fragment>
  );
}

export default App;
