import { useState } from 'react';
import Swal from "sweetalert2"
import SliderBar from './SliderBar';

const SignUp = ({onSave}) => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState('');
  const [colour, setColour] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day && !colour && !email) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your name, email, DOB and favourite colour!'
        })
    } else if (!text && day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your name, email, DOB and favourite colour!'
        })
    } else if (!email && day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your name, email, DOB and favourite colour!'
        })
    } else if (text && !day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your name, email, DOB and favourite colour!'
        })
    } else if (email && !day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your name, email, DOB and favourite colour!'
        })
    } else if (text && !colour) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your name, email, DOB and favourite colour!'
        })
    } else {
        onSave({ text, day, colour, email });
    }
    setText('');
    setEmail('');
    setDay('');
    setColour('');
  }

  return (
      <form className="sign-form" onSubmit={onSubmit}>
          <div className="form-control">
              <input type="text" placeholder="Name" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-control">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-control">
              <input type="date" placeholder="Date of birth" value={day} onChange={(e) => setDay(e.target.value)} />
          </div>
          <div className="form-control">
              <input type="color" placeholder="Favourite colour" value={colour} onChange={(e) => setColour(e.target.value)} />
          </div>
          <label className='salary-label'>Salary</label>
          <SliderBar/>
          <input type="submit" className="btn btn-block" value="Submit"/>
      </form>
    )
}
export default SignUp

// Name, Email, Date of birth, Favourite colour, Salary (using a range input)
