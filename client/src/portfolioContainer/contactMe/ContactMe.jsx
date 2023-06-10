import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import axios from "axios";
import "./contactMe.css";
import SectionHeading from "../../components/SectionHeading";
import webdevvector from "../../assets/webdevvector.png";

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
    <section id="contact" className="contactMe container">
      <SectionHeading
        title="Contact Me"
        body="Let's discuss and bring your web development ideas to life!"
      />

      <div className="background rounded-md mx-auto form__div ">
        <h2>Get In Touch!</h2>
        <div className="contact__extra">
          <div className="contact__img">
            <RiMailSendLine size={28} />
            <h3>Email</h3>
            <p>katlegoj.dev@gmail.com</p>
          </div>
          <div className="contact__img">
            <FiPhoneCall size={28} />
            <h3>Phone</h3>
            <p>+27 614 361 437</p>
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
      <div className="bg_webicon">
        <img src={webdevvector} alt="" />
      </div>
    </section>
  );
}
