import React from 'react';
// import { ListItem, ListItemText } from '@material-ui/core';
import { AutoSizer, List } from "react-virtualized";

import { ListContainer, StyledListItem, StyledItemText, ListHeader } from './styles';
import { Typography } from '@material-ui/core';


type Item = {
  name: string,
  age: string | number,
}

interface ListProps {
  items: Array<Item>
}

export default function VirtualList({ items }: ListProps) {
  const listHeight = 300;
  const rowHeight = 18;

  function renderItem({ index, key, style }: any) {
    return (
      <StyledListItem key={key} style={style} button>
        <StyledItemText>{items[index].name}</StyledItemText>
        <StyledItemText align="right" >{items[index].age}</StyledItemText>
      </StyledListItem>
    );
  }

  return (
    <>
      <ListHeader>
        <Typography>Name</Typography>
        <Typography style={{ marginLeft: 'auto' }}>Age</Typography>
      </ListHeader>
      
      <ListContainer>
        <AutoSizer>
        {({height, width}) => (
          <List
            width={width}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={renderItem}
            rowCount={items.length}
          />
        )}
        </AutoSizer>
      </ListContainer>
    </>
  )
};
