import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div>
          <div className="popup">
            <div className="popup-inner">
              <button className="close-btn" onClick={() => props.setTrigger(false
                )}>𝗫</button>
              { props.children }
            </div>
          </div>
        </div>
    ) : "";
}


export default Popup
