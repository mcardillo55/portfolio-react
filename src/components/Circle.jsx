import React from 'react';

const Circle = (props) => {
    return(
      <div className="circle col-center">
          <i className={"fa fa-4x " + props.faIcon}></i>
          <div className="circle-text">{props.circleText}</div>
      </div>
    );
  }

export default Circle;