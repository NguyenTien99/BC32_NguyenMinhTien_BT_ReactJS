import React from "react";

const GlassesDetail = ({ glasses }) => {
    if(!glasses){
        return null
    }
  return (
    <div className='col-6'>
        <div id="model__tryGlass">
            <img id="modelImg__tryGlass" src="./glassesImage/model.jpg" alt="model" />
            
            <img className="img__try" src={glasses.url} alt={glasses.name} />
            <div className="info__glass">
                <h5>{glasses.name}</h5>
                <p>{glasses.desc}</p>
            </div>
        </div>
    </div>
  );
};

export default GlassesDetail;
