import { motion } from "motion/react";
import { Shield, Zap, BarChart3, Globe, Cpu, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "IT Consulting",
      description: "Strategic technology planning, infrastructure audits, and roadmap development to align IT with your business goals.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Reduced downtime", "Scalable infrastructure", "Cost optimization"],
    },
    {
      title: "Workflow Optimization",
      description: "Process mapping and automation to eliminate manual errors and increase team productivity across all departments.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Faster turnaround", "Lower operational costs", "Improved team morale"],
    },
    {
      title: "Data Analytics & BI",
      description: "Transforming raw data into meaningful dashboards and insights that drive smarter business decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Actionable insights", "Real-time reporting", "Predictive modeling"],
    },
    {
      title: "Digital Transformation",
      description: "Modernizing legacy systems and adopting cloud-native solutions to keep your business competitive in a digital world.",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Enhanced agility", "Better customer experience", "Future-proof tech"],
    },
    {
      title: "Custom Software Solutions",
      description: "Bespoke software development tailored to your specific business requirements and operational needs.",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Unique functionality", "Seamless integration", "Full ownership"],
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security audits, threat detection, and employee training to protect your valuable business data.",
      icon: <Lock className="w-8 h-8" />,
      benefits: ["Data protection", "Compliance readiness", "Peace of mind"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions designed to drive efficiency, security, and growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-blue/20 transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="inline-flex items-center font-bold text-brand-blue group-hover:translate-x-2 transition-transform">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Proven Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we deliver measurable impact for your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your current state and identify pain points." },
              { step: "02", title: "Strategy", desc: "We develop a tailored roadmap for your business." },
              { step: "03", title: "Implementation", desc: "We execute the plan with minimal disruption." },
              { step: "04", title: "Optimization", desc: "We monitor results and continuously improve." },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-light rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Our Free Efficiency Guide</h2>
              <p className="text-lg text-gray-600 mb-8">
                Learn 10 proven strategies to optimize your business workflows and save up to 15 hours per week.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
                  required
                />
                <button className="px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-900 transition-all shadow-lg">
                  Get the Guide
                </button>
              </form>
            </div>
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="aspect-[3/4] bg-white rounded-xl shadow-2xl border-8 border-white overflow-hidden transform rotate-3">
                <div className="h-full bg-brand-blue p-6 flex flex-col justify-between text-white">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Free Resource</div>
                  <div className="text-2xl font-bold leading-tight">Business Efficiency Guide 2026</div>
                  <div className="w-12 h-1 bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
