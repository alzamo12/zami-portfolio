import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className=" rounded-2xl"
    >
      <h2 className="text-3xl lg:text-4xl mb-6 font-bold text-center text-gray-800">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row-reverse gap-10 justify-between items-stretch  w-full mx-auto">
        {/* Contact Info */}
        <div className="bg-cyan-50 shadow-lg hover:shadow-xl 
        transition-all p-8 rounded-2xl w-full 
        lg:w-1/2 flex flex-col 
        justify-center ">
          <div className="">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h3>
            <div className="divider"></div>
            <p className="mb-3 text-gray-600">
              <strong className="text-gray-800">Email:</strong> rafiqulislam4969@gmail.com
            </p>
            <div className="divider"></div>

            <p className="mb-3 text-gray-600">
              <strong className="text-gray-800">Phone:</strong> +880-1790605599
            </p>
            <div className="divider"></div>

            <p className="mb-3 text-gray-600">
              <strong className="text-gray-800">WhatsApp:</strong> +880-1790605599
            </p>
            <div className="divider"></div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-cyan-50 shadow-lg hover:shadow-xl transition-all p-8 rounded-2xl w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-cyan-100 border-none text-black font-semibold rounded-lg w-full transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Contact;
