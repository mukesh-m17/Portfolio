import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

emailjs.send(
  "service_agsihbc",
  "template_765utnq",
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  "By1Vtg3cArOMz2K51"
)
.then(() => {
  alert("✅ Message sent successfully!");
})
.catch((error) => {
  console.error("EmailJS Error:", error);
  alert("❌ Failed to send message");
});

  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className="submit" type="submit-btn">Send Message 💌</button>
      </form>
    </section>
  );
}

export default Contact;
//service_n1yyejb
//template_765utnq
//By1Vtg3cArOMz2K51