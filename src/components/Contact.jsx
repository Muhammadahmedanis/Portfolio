import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsSend } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-emerald-900 to-teal-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Main Heading - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Something
            <span className="text-teal-400"> Amazing </span>
            Together
          </h1>
          <p className="text-emerald-100 text-lg">Get in touch with us and let's bring your vision to life</p>
        </div>

        {/* Contact Form Card */}
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-xl">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <MdOutlineMail className="text-emerald-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-600">contact@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <LuPhone className="text-emerald-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <SlLocationPin className="text-emerald-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-600">123 Business Avenue, Suite 100</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-emerald-800 font-medium mb-2">Ready to Start?</h3>
              <p className="text-gray-600">
                Fill out the form and we'll get back to you as soon as possible. We're excited to hear about your
                project!
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              <div className="space-y-4">
                {/* Service Selection */}
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Web Design", "Development", "Other"].map((service) => (
                    <button
                      key={service}
                      className="px-4 py-2 rounded-full border border-emerald-200 text-sm
                        hover:bg-emerald-50 focus:bg-emerald-600 focus:text-white focus:border-emerald-600
                        transition-colors duration-200"
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-gray-200 py-3 px-0 text-gray-800 placeholder-gray-400
                      focus:outline-none focus:border-emerald-600 transition-colors bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border-b border-gray-200 py-3 px-0 text-gray-800 placeholder-gray-400
                      focus:outline-none focus:border-emerald-600 transition-colors bg-transparent"
                  />
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full border-b border-gray-200 py-3 px-0 text-gray-800 placeholder-gray-400
                      focus:outline-none focus:border-emerald-600 transition-colors bg-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="w-full bg-emerald-600 text-white rounded-full py-4 flex items-center justify-center gap-2
                    hover:bg-emerald-700 transition-colors duration-200 mt-6"
                >
                  Send Message
                  <BsSend className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact