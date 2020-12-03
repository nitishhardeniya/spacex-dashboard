import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GridContainer = props => {
  const gridClasses =
    props.item &&
    Object.keys(props.breakpoints).reduce((acc, currentVal) => {
      if (!props.breakpoints[currentVal]) {
        return acc;
      }
      return `${acc} HPGrid-col-${currentVal}-${props.breakpoints[currentVal]}`;
    }, '');

  const className = classNames(
    `HPGrid`,
    `HPGrid-container-row`,
    `HPGrid-container-${props.direction}`,
    `HPGrid-container-${props.justify}`,
    `HPGrid-container-align-${props.alignItems}`,
    props.className,
    gridClasses,
  );
  return (
    <div
      style={{ ...props.style }}
      onClick={props.onClick}
      className={className}
    >
      {props.children}
    </div>
  );
};

export default GridContainer;
GridContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  justify: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  breakpoints: PropTypes.object,
  item: PropTypes.bool,
  onClick: PropTypes.func,
};

GridContainer.defaultProps = {
  direction: 'row',
  alignItems: 'center',
  justify: 'flex-start',
  onClick: () => {},
};
