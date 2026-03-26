import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      title: "Global Logistics Optimization",
      category: "Workflow Optimization",
      impact: "35% reduction in processing time",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      description: "Implemented a custom automated tracking and routing system for a mid-sized logistics firm.",
    },
    {
      title: "FinTech Infrastructure Audit",
      category: "IT Consulting",
      impact: "99.99% uptime achieved",
      image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800",
      description: "Complete security and performance audit of a growing fintech startup's cloud infrastructure.",
    },
    {
      title: "Healthcare Data Analytics",
      category: "Data Analytics",
      impact: "20% increase in patient throughput",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      description: "Developed a predictive analytics dashboard to optimize staffing and resource allocation.",
    },
    {
      title: "E-commerce Digital Pivot",
      category: "Digital Transformation",
      impact: "150% growth in online revenue",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
      description: "Guided a traditional retailer through a complete digital transformation and omnichannel strategy.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results for real businesses. Explore how we've helped our clients achieve measurable growth.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="text-white">
                      <p className="text-sm font-bold uppercase tracking-widest mb-2">{project.category}</p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="p-4 bg-green-50 border border-green-100 rounded-xl inline-block">
                      <p className="text-sm font-bold text-green-700">Impact: {project.impact}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:border-brand-blue transition-all">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "PRODESK transformed our messy internal processes into a well-oiled machine. The ROI was evident within the first quarter.",
                author: "James Wilson",
                role: "COO, TechLogistics",
              },
              {
                quote: "Their IT audit saved us from several potential security breaches. Professional, thorough, and highly knowledgeable.",
                author: "Linda Garcia",
                role: "Director of IT, HealthFirst",
              },
              {
                quote: "The best business decision we made this year. Their workflow optimization strategy literally gave us 10 hours back per week.",
                author: "Robert Chen",
                role: "Founder, GrowthRetail",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <p className="text-lg italic mb-8">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to be our next success story?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Let's discuss how we can apply our expertise to your specific business challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-900 transition-all shadow-lg"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
