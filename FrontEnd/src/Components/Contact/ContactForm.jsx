import React, { useState } from "react";
import axios from "axios";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  const send = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      massage: massage,
    };

    axios.post("http://127.0.0.1:8000/api/Contact", contact);

    setName("");
    setEmail("");
    setMassage("");
  };
  return (
    <>
      {/* Contact Section Begin */}
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form">
                <h2>Contact Form</h2>
                <form onSubmit={send}>
                  <div className="group-in">
                    <label htmlFor="name">Name</label>
                    <input
                      value={name}
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="group-in">
                    <label htmlFor="email">Email</label>
                    <input
                      value={email}
                      type="text"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="group-in">
                    <label htmlFor="massage">Massage</label>
                    <textarea
                      value={massage}
                      id="massage"
                      name="massage"
                      onChange={(e) => setMassage(e.target.value)}
                    />
                  </div>
                  <button type="submit">Submit Now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info">
                <h2>Contact Info</h2>
                <p>
                We’d love to hear from you
Whether you’re curious about Matches <br></br>or even press—we’re ready to answer any questions.
                </p>
                <div className="ci-address">
                  <h5>Amman , Jordan</h5>
                  <ul>
                    <li><a  href="tel:+962778084901" style={{color:"black"}}>+962778084901</a></li>
                    <li><a  href="mailto:hayya@gmail.com" style={{color:"black"}}>hayya@gmail.com </a></li>
                  </ul>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};
