import React from 'react';

const Circle = (props) => {
    return(
      <div class="circle col-center">
          <i class={"fa fa-4x " + props.faIcon}></i>
          <div class="circle-text">{props.circleText}</div>
      </div>
    );
  }

export default Circle;