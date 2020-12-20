import React from 'react';

const Error = ({ error }) => {
  return (
    <p style={{ color: 'red', fontSize: '14px', alignSelf: 'flex-start' }}>
      {error}
    </p>
  );
};

export default Error;
