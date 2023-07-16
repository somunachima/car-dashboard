import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div onClick={() => props.setTrigger(false)}>
          <div className="popup">
            <div className="popup-inner">
              <button className="close-btn" onClick={() => props.setTrigger(false
                )}>Close</button>
              { props.children }
            </div>
          </div>
        </div>
    ) : "";
}


export default Popup
