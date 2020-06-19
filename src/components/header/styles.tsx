import styled from 'styled-components';
import { Typography } from '@material-ui/core';


// Without '<any>' the error 'No overload matches this call' is thrown. 
// No idea why... yet.
export const StyledHeader = styled.header<any>`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor}
`;

export const StyledTitle = styled(Typography)`
  color: #F0F3BD;
`;
