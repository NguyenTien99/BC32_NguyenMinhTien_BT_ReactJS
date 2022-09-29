import React from 'react';

const Item = () => {
    
  return (
    // <div>
        <div className="col-3">
            <div class="card text-center">
                <div class="card-header" style={{backgroundColor:'#bbbaba', height: '150px', lineHeight:'120px'} }>
                    500 x 325
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, rerum!</p>
                </div>
                <div class="card-footer text-muted">
                    <button className='btn btn-primary'>Find out more</button>
                </div>
            </div>
        </div>
    // </div>
  );
};

export default Item;