import React, {useState,useContext} from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"
import { ThemeContext } from '../../Context';

const Result =() => {
    return(
        <p className="result">Your message has been successfully sent. 
        I will contact you soon</p>
        )
}


const Contact = (props) => {
    
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [result,showResult] = useState(false); 


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t5sm41e', 'template_w9ncslm', e.target, 'user_qqq5b7nTRClHlRs6JPQOh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);

  };

  //hide result
  setTimeout (() => {
      showResult(false)
  },5000)

    return (
        <form action="" onSubmit={sendEmail}>
            <div className = "contact">
                <div className= "transition">
            <div className = "formWord">
                <div className="text">
                <h2>Send me E-mail!</h2>
                <span>Full Name</span>
                <br />
                <input style={{backgroundColor: darkMode && "#333"}} className = "input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input style={{backgroundColor: darkMode && "#333"}} className = "input100" type="text" name="phone" required />
                <br />
                <span>Email</span>
                <br />
                <input style={{backgroundColor: darkMode && "#333"}} className = "input100" type="text" name="email" required />
                <br />
            </div>
            <div className="formWord1">
                <span>Message</span>
                <br />
                <textarea style={{backgroundColor: darkMode && "#333"}} className= 'message' name='message' required></textarea>
                <br />
                <button style={{backgroundColor: darkMode && "#333"}} className='button'>SUBMIT</button>

                <div className="row">{result ? <Result /> : null }</div>
            </div>
            </div>
            </div>
            </div>
        </form>
    )
}

export default Contact
