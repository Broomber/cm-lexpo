import React from 'react';

import DecorDot from './DecorDot/DecorDot';

function NavDecoration() {
  return (
    <div className="decoration">
      <div className="decoration__inner">
        <div className="decoration__row">
          <DecorDot color='orange'/>
          <DecorDot color='red'/>
          <DecorDot color='brown'/>
          <DecorDot color='yellow'/>
          <DecorDot color='turquoise'/>
          <DecorDot color='blue'/>
          <DecorDot color='green'/>
        </div>
        <div className="decoration__row">
          <DecorDot color='blue'/>
        </div>
        <div className="decoration__row">
          <DecorDot color='brown'/>
          <DecorDot color='yellow'/>
          <DecorDot color='turquoise'/>
        </div>
      </div>
    </div>
  )
};

export default NavDecoration;