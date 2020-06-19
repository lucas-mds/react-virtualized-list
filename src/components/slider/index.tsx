import React, { useEffect } from 'react';
import Slider from '@material-ui/core/Slider';

import { Container, StyledText } from './styles';

type SlideProps = {
  min: number,
  max: number,
  onChange: any,
  width?: string,
}

export default function RangeSlider({ min, max, onChange, width }: SlideProps) {
  const [value, setValue] = React.useState<number[]>([min, max]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  function onUpdateValue() {
    onChange(value);    
  }

  useEffect(onUpdateValue, [value])

  return (
    <Container width={width}>
      <StyledText variant="subtitle1" id="range-slider">
        Age Range
      </StyledText>
      <Slider
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={((value: number) => `${value}`)}
        style={{ width: '150px' }}
      />
    </Container>
  );
}
