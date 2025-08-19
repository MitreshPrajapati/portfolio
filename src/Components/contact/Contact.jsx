import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { IoCallOutline } from "react-icons/io5";
import { TbBrandLinkedin } from "react-icons/tb";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mukyyz7", "template_rkp45ys", form.current, {
        publicKey: "KrtNR3BxNc0672gyuyLi7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mitreshverma@gmail.com</h5>
            <a
              href="mailto:mitreshverma@gmail.com?subject=Let's Connect&body=Hi Mitresh, I found you via your website and would like to connect."
              target="_blank"
            >
              Send a email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8860919561</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+918860919561"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <TbBrandLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>mitresh-prajapati</h5>
            <a
              href="https://www.linkedin.com/in/mitresh-prajapti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={"6"}
            placeholder="Your Message"
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
