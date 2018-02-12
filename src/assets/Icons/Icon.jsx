import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
    const styles = {
      svg: {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      path: {
        fill: props.color,
      },
    };
  
    return (
      <svg
        style={styles.svg}
        width={`${props.size}px`}
        height={`${props.size}px`}
        viewBox={`0 0 ${props.w || 1024} ${props.h || 1024}`}
      >
        <path
          style={styles.path}
          d={props.icon}
        ></path>
      </svg>
    );
  };
  
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number
  };
  
  Icon.defaultProps = {
    size: 16,
  };
  
  export default Icon;