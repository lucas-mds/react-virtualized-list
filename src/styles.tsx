import styled from 'styled-components';
import { Paper } from '@material-ui/core';

type StyledPaperProps = {
  width?: string,
  margin?: string,
  padding?: string,
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledPaper = styled(Paper)<StyledPaperProps>`
  width: ${({ width }) => width || '600px'};
  margin: ${({ margin }) => margin || '60px auto auto auto'};
  padding: ${({ padding }) => padding || '10px'};
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin: 10px;
`;
