import React from "react";

const GlassesDetail = ({ glasses }) => {
    if(!glasses){
        return null
    }
  return (
    <div className='col-6'>
        <div className="mode__tryGlass">
            <img src="./glassesImage/model.jpg" alt="model" />
            
            <img className="img__try" src={glasses.url} alt={glasses.name} />
            <div className="info__glass">
                <h4>{glasses.name}</h4>
                <p>{glasses.desc}</p>
            </div>
        </div>
    </div>
  );
};

export default GlassesDetail;
