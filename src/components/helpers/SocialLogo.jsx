import React from 'react';

const CompName = ({ source }) => {
  return (
    <div className="socialLogo">
      <img className="socialInner" alt="social logo" src={source} />
    </div>
  );
};

export default CompName;
