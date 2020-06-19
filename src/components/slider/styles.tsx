import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

type ContainerProps = {
  width?: string,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: ${({ width }) => width};
  margin-left: auto;
`;

export const StyledText = styled(Typography)`
  margin-right: 20px !important;
`;