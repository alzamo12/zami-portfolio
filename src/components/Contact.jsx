import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  // emailjs.init('Sw3gtkb3QL7soiAep');
  // console.log(import.meta.env.VITE_email_js_public_key)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_email_js_service_id, // Replace with your EmailJS service ID
        import.meta.env.VITE_email_js_template, // Replace with your EmailJS template ID
        form.current,
        import.meta.env.VITE_email_js_public_key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="min-h-screen bg-base-200 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start max-w-6xl mx-auto">

        {/* Contact Info */}
        <div className="bg-base-100 shadow-xl p-6 rounded-xl w-full lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2"><strong>Email:</strong> your.email@example.com</p>
          <p className="mb-2"><strong>Phone:</strong> +123 456 7890</p>
          <p className="mb-2"><strong>WhatsApp:</strong> +123 456 7890</p>
        </div>

        {/* Contact Form */}
        <div className="bg-base-100 shadow-xl p-6 rounded-xl w-full lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
