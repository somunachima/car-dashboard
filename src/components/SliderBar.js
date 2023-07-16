import { useState } from 'react';

const RangeSlider = () => {

  const [rangeval, setRangeval] = useState(null);

  return (
    <div className='slider'>
      <input type="range" className="custom-range" min="0" max="2000000" step="1000"
       onChange={(event) => setRangeval(event.target.value)} />
      <p>£{rangeval}</p>
    </div>
  );
};

export default RangeSlider;
