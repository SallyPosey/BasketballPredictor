import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
  const style = {
    '--background-image': `url(${imageUrl})`
  };

  return (
    <div className="page-background" style={style}>
      {children}
    </div>
  );
};

export default BackgroundImage; 