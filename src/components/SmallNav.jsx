import React from 'react';

const SmallNav = (props) => {
    return (
        <div className="small-nav d-md-none">
            <i className={"fa " + props.faIcon}/> {props.text}
        </div>
    );
}

export default SmallNav;