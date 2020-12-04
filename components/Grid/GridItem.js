import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GridItem = (props) => {
  const gridClasses = Object.keys(props.breakpoints).reduce(
    (acc, currentVal) => {
      if (!props.breakpoints[currentVal]) {
        return acc;
      }
      return `${acc} HPGrid-col-${currentVal}-${props.breakpoints[currentVal]}`;
    },
    '',
  );
  const className = classNames(props.className, gridClasses);
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

export default GridItem;

GridItem.propTypes = {
  breakpoints: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

GridItem.defaultProps = {
  onClick: () => {},
};
