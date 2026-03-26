import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, BarChart3, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "IT Consulting",
      description: "Strategic technology planning to align your IT infrastructure with business goals.",
      icon: <Shield className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Workflow Optimization",
      description: "Streamline your operations and eliminate bottlenecks for maximum efficiency.",
      icon: <Zap className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Data Analytics",
      description: "Turn your raw data into actionable insights with our advanced analytics solutions.",
      icon: <BarChart3 className="w-6 h-6 text-brand-blue" />,
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "250+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Efficiency Increase", value: "40%" },
    { label: "Years Experience", value: "12+" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Reliable, Tailored <span className="text-brand-blue">Business Solutions</span> for Growth.
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                PRODESK helps small to medium businesses optimize their workflows and IT infrastructure with measurable impact. We turn complexity into clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-brand-blue hover:bg-blue-900 transition-all transform hover:-translate-y-1"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
              
              <div className="mt-10 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p><span className="font-bold text-gray-900">500+</span> businesses trust us</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000"
                  alt="Business Solution"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden sm:block border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Efficiency Boost</p>
                    <p className="text-xl font-bold text-gray-900">+42%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-brand-blue mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold text-brand-blue uppercase tracking-wide mb-3">Our Expertise</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Tailored Solutions for Modern Business Challenges</p>
            <p className="text-lg text-gray-600">We don't believe in one-size-fits-all. Our approach is deeply analytical and results-driven.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-brand-blue/10 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <Link to="/services" className="text-brand-blue font-semibold inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Optimize Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their operations with PRODESK.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48"></div>
      </section>
    </div>
  );
}
