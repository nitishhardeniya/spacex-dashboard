import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from './GridContainer';
import GridItem from './GridItem';

const Grid = (props) => {
  const { xs, sm, md, lg, xl, direction, justify, alignItems, container } = props;
  const breakpoints = {
    xs,
    sm,
    md,
    lg,
    xl,
  };
  return container ? (
    <GridContainer
      breakpoints={breakpoints}
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      {...props}
    />
  ) : (
    <GridItem breakpoints={breakpoints} {...props} />
  );
};

export default Grid;

Grid.propTypes = {
  container: PropTypes.bool,
  item: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};

Grid.defaultProps = {
  xs: 24,
  direction: "row"
};
