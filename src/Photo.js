import React from 'react';

function Photo(props) {
  const { img, imgTitle, aboutImg } = props;

  return (
    <>
      <img src={img} alt={imgTitle} />
      <h2>{imgTitle}</h2>
      <p>{aboutImg}</p>
    </>
  );
}

export default Photo;