import styled from 'styled-components';
import { ListItem, ListItemText } from '@material-ui/core';

/** Types necessary to avoid 'No overload matches this call' */
type StyledItemTextProps = {
  align?: string,
  marginLeft?: string,
}

type ListContainerProps = {
  height?: string,
  minHeight?: string,
}

const ListContainerDefaultProps: ListContainerProps = {
  height: '300px',
}


export const ListContainer = styled.div<ListContainerProps>`
  min-height: ${({ minHeight }) => minHeight || ListContainerDefaultProps.height};
  height: ${({ height }) => height || ListContainerDefaultProps.height};
`;

export const StyledListItem = styled(ListItem).attrs(props=> ({
  style: props.style,
}))``;

export const StyledItemText = styled(ListItemText)<StyledItemTextProps>`
  text-align: ${({ align }) => align || 'left' };
  margin-left: ${({ marginLeft }) => marginLeft || 0 };
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px;
`;


