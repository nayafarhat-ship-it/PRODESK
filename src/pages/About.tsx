import { motion } from "motion/react";
import { CheckCircle2, Users, Target, Award, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Reliability",
      description: "We deliver on our promises and provide consistent support to our clients.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve with the latest IT and workflow solutions.",
      icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We tailor every solution to your unique needs.",
      icon: <Users className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
      icon: <Award className="w-6 h-6 text-brand-blue" />,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://picsum.photos/seed/sarah/400/400",
    },
    {
      name: "Michael Chen",
      role: "Head of IT Consulting",
      image: "https://picsum.photos/seed/michael/400/400",
    },
    {
      name: "Elena Rodriguez",
      role: "Workflow Strategist",
      image: "https://picsum.photos/seed/elena/400/400",
    },
    {
      name: "David Smith",
      role: "Client Success Manager",
      image: "https://picsum.photos/seed/david/400/400",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering small and medium businesses through strategic technology and optimized workflows since 2014.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At PRODESK, we believe that every business, regardless of size, deserves access to world-class IT infrastructure and efficient workflows. Our mission is to bridge the gap between complex technology and business growth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work closely with our clients to understand their pain points and deliver measurable impact through tailored solutions. Whether it's digital transformation or simple process optimization, we are your partners in success.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Target className="text-brand-blue mr-2" />
                  <span className="font-bold text-gray-900">Results Driven</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-brand-blue mr-2" />
                  <span className="font-bold text-gray-900">Client Focused</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Team working"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-8 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-4xl font-bold mb-1">12+</p>
                <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at PRODESK.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The dedicated professionals behind PRODESK's success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-full bg-brand-blue/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-brand-blue font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
