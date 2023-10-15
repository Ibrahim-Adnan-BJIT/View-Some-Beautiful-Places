import React, { useState } from 'react';

function CardComponent({ data }) {
  const [currentObject, setCurrentObject] = useState(data[0]);

  const handleNextClick = () => {
    const currentIndex = data.indexOf(currentObject);
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentObject(data[nextIndex]);
  };

  return (
    <div className="card">
      <img src={currentObject.imageSrc} alt={currentObject.imageAlt} height={200} width={200}/>
      <div className="card-content">
        <h3>{currentObject.title}</h3>
        <p>{currentObject.description}</p>
        <button className="button" onClick={handleNextClick}>Next Place</button>
      </div>
    </div>
  );
}
export default CardComponent;