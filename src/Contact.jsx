import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div>
        <h1>CONTACT US</h1>
        <p>
          Please enter details below and we shall get in touch with you shortly
        </p>
      </div>
      <form>
        <input type="text" value="Full Name" />
        <input type="text" value="Contact Number" />
        <input type="email" value="Email Address" />
        <button className="sumbit">SUMBIT</button>
      </form>
    </div>
  );
}

export default Contact;
