import React from 'react';

import DecorDot from './DecorDot/DecorDot';

function AsideDecoration() {
  return (
    <div className="decoration">
      <div className="decoration__inner">
        <div className="decoration__row">
          <DecorDot color='turquoise'/>
        </div>
        <div className="decoration__row">
          <DecorDot color='yellow'/>
        </div>
        <div className="decoration__row">
          <DecorDot color='brown'/>
        </div>
        <div className="decoration__row">
          <DecorDot color='red'/>
        </div>
        <div className="decoration__row">
          <DecorDot color='orange'/>
          <DecorDot color='red'/>
          <DecorDot color='brown'/>
          <DecorDot color='yellow'/>
          <DecorDot color='turquoise'/>
          <DecorDot color='green'/>
        </div>
        <div className="decoration__row">
          <DecorDot color='green'/>
          <DecorDot color='orange'/>
          <DecorDot color='red'/>
          <DecorDot color='brown'/>
          <DecorDot color='yellow'/>
          <DecorDot color='turquoise'/>
        </div>
      </div>
    </div>
  )
};

export default AsideDecoration;