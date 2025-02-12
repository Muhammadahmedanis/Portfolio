import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";

function Contact() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct WhatsApp URL with all input data
    const whatsappURL = `https://wa.me/+923249208699?text=${encodeURIComponent(
      `Hello, my name is ${name}.
I am interested in ${selectedService || "a service"}.
My email is ${email}.
Message: ${message}`
    )}`;
    // Open the WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-[#dcddf8] to-teal-900 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-6xl">
        {/* Main Heading - Centered */}
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50">
            <div className="w-96 h-96 bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-[#3f3082] max-w-2xl mx-auto text-lg">
            Get in touch with us and let's bring your vision to life
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="grid md:grid-cols-2 gap-8 bg-[#ececfb] rounded-2xl p-8 shadow-xl">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#dcddf8] p-2 rounded-full">
                    <MdOutlineMail className="text-[#7f75dd] h-5 w-5" />
                  </div>
                  <span className="text-gray-600">
                    ahmedanis4546@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#dcddf8] p-2 rounded-full">
                    <LuPhone className="text-[#7f75dd] h-5 w-5" />
                  </div>
                  <span className="text-gray-600">+92 3249208699</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#dcddf8] p-2 rounded-full">
                    <SlLocationPin className="text-[#7f75dd] h-5 w-5" />
                  </div>
                  <span className="text-gray-600">
                    Gulshan-e-Iqbal Block 14, Karachi, PK
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#dcddf8] p-6 rounded-xl">
              <h3 className="text-white font-medium mb-2">Ready to Start?</h3>
              <p className="text-[#261e57]">
                Fill out the form and we'll get back to you as soon as possible.
                We're excited to hear about your project!
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <div className="space-y-4">
                {/* Service Selection */}
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Frontend Development", "Backend Development", "Full Stack Development"].map(
                    (service) => (
                      <button
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`px-4 py-2 rounded-full border border-[#7f75dd] text-sm transition-colors duration-200 ${
                          selectedService === service
                            ? "bg-[#7f75dd] text-white"
                            : "hover:bg-[#dcddf8] focus:bg-[#261e57] focus:text-white focus:border-emerald-600"
                        }`}
                      >
                        {service}
                      </button>
                    )
                  )}
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-gray-200 py-3 px-0 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7f75dd] transition-colors bg-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-gray-200 py-3 px-0 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7f75dd] transition-colors bg-transparent"
                    />
                    <textarea
                      placeholder="Your message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full border-b border-gray-200 py-3 px-0 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7f75dd] transition-colors bg-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#261e57] font-semibold cursor-pointer text-white rounded-full py-4 flex items-center justify-center gap-2 hover:bg-[#a09de8] transition-colors duration-200 mt-6"
                  >
                    Send Message
                    <ImWhatsapp className="h-6 w-6" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
