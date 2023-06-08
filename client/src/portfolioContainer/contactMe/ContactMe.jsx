import React, { useState } from "react";
import contactme from "../../assets/contactme.png";
import axios from "axios";
import "./contactMe.css";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      await axios.post("/send-email", formData);
      alert(
        "Message sent successfully. Thank you, we will get back to you soon!"
      );
      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contactMe container-px">
      <div className="contactMe__heading">
        <h1>Contact Me</h1>
        <p>Let's discuss and bring your web development ideas to life!</p>
        <div></div>
      </div>
      <div className="background rounded-md mx-auto form__div ">
        <h2>Get In Touch!</h2>
        <div className="contact__extra">
          <h3>Send Your Email Here!</h3>
          <div className="contact__img">
            <img src={contactme} alt="" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="!block" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
