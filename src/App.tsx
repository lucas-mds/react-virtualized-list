import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


// Components Imports
import CoolList from './components/cool-list';


// Styles Imports
import { Container, StyledPaper, Footer } from './styles';


function App() {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography>
            Front Challenge
          </Typography>
        </Toolbar>
        
      </AppBar>

      <StyledPaper>
        <Typography variant="h5" align="center">
          Nice virtualized list with filters
        </Typography>
        <CoolList />
      </StyledPaper>
      <Footer>
        <a href="https://github.com/lucas-mds">
          made by lucasmds
        </a>
      </Footer>
    </Container>
  );
}

export default App;
