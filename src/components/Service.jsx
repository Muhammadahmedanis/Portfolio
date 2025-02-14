import { FiLayout, FiLayers, FiShield } from "react-icons/fi";
import { LuSparkles , LuGem, LuDatabase, LuCpu, LuSmartphone, LuLink2, LuCloud, LuSettings, LuRefreshCcw, LuRefreshCw } from "react-icons/lu";
import { IoCode } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { FaRegCompass } from "react-icons/fa6";

const services = [
  {
    icon: <FiLayout className="w-8 h-8" />,
    decorativeIcon: <LuSparkles className="w-5 h-5" />,
    title: "Web Design",
    description:
      "Creating beautiful, intuitive interfaces with modern UI/UX principles. Focus on user experience and brand consistency.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: <IoCode className="w-8 h-8" />,
    decorativeIcon: <LuGem className="w-5 h-5" />,
    title: "Web Development",
    description:
      "Building robust web applications using modern technologies and best practices for scalable, maintainable code.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <SlGlobe className="w-8 h-8" />,
    decorativeIcon: <FaRegCompass className="w-5 h-5" />,
    title: "Frontend Development",
    description:
      "Crafting responsive, interactive user interfaces with React, ensuring smooth user experiences across all devices.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <LuDatabase className="w-8 h-8" />,
    decorativeIcon: <LuCpu className="w-5 h-5" />,
    title: "Backend Development",
    description:
      "Developing secure, efficient server-side solutions with scalable architecture and optimal performance.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: <LuSmartphone className="w-8 h-8" />,
    decorativeIcon: <FiLayers className="w-5 h-5" />,
    title: "Responsive Design",
    description:
      "Ensuring perfect display and functionality across all devices and screen sizes with mobile-first approach.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: <LuLink2 className="w-8 h-8" />,
    decorativeIcon: <FiShield className="w-5 h-5" />,
    title: "API Integration",
    description:
      "Seamlessly connecting your applications with third-party services and APIs for enhanced functionality.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: <LuCloud className="w-8 h-8" />,
    decorativeIcon: <LuSettings className="w-5 h-5" />,
    title: "Web Hosting & Deployment",
    description: "Managing secure, reliable hosting solutions and implementing efficient deployment pipelines.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: <LuRefreshCw className="w-8 h-8" />,
    decorativeIcon: <LuSparkles className="w-5 h-5" />,
    title: "Maintenance & Updates",
    description:
      "Providing ongoing support, regular updates, and continuous improvements to keep your application running smoothly.",
    gradient: "from-violet-500 to-purple-500",
  },
]

function Service() {
  return (
    <div id="service" className="bg-[#dcddf8] text-white py-10 px-4 relative overflow-hidden">
      {/* Animated Background Bubbles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              // background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
              // animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              // animationDelay: `${Math.random() * -20}s`,
            }}
          />
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50">
            <div className="w-96 h-96 bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-3xl" />
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-[#3f3082] max-w-2xl mx-auto text-[14px] font-semibold md:text-lg">
            Delivering comprehensive web solutions with a focus on quality, performance, and user experience
          </p>
        </div>

        {/* Services Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative border-none">
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-[#b6b6ef] rounded-xl" />

              {/* Card Content */}
              <div className="relative p-6 h-full backdrop-blur-sm rounded-xl border-none hover:border-gray-600/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="mb-4 flex justify-between items-start">
                  {/* Main Icon with Gradient Background */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  {/* Decorative Icon */}
                  <div className="text-white group-hover:text-gray-400 transition-all duration-300 group-hover:rotate-12">
                    {service.decorativeIcon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-[#3f3082] text-sm leading-relaxed group-hover:text-gray-300 transition-all duration-300">
                  {service.description}
                </p>

                {/* Hover Effect Gradient Border */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add the animation keyframes */}
      <style>{`@keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-100px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }`}</style>
    </div>
  )
}

export default Service