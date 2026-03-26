import { motion } from "motion/react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "5 Signs Your Business Workflow is Costing You Money",
      excerpt: "Inefficient processes are the silent killers of business growth. Learn how to identify and fix them.",
      date: "March 15, 2026",
      author: "Elena Rodriguez",
      category: "Workflow",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "The Future of IT Infrastructure for SMBs in 2026",
      excerpt: "From cloud-native to AI-driven security, here's what small businesses need to know about the evolving tech landscape.",
      date: "March 10, 2026",
      author: "Michael Chen",
      category: "IT Strategy",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "How to Build a Data-Driven Culture from Scratch",
      excerpt: "Data is useless if your team doesn't know how to use it. Here's a step-by-step guide to fostering a data-first mindset.",
      date: "March 05, 2026",
      author: "Sarah Johnson",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Cybersecurity Checklist for Remote Teams",
      excerpt: "Protect your business data while your team works from anywhere. Essential tips for the modern workforce.",
      date: "February 28, 2026",
      author: "Michael Chen",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Insights & Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert perspectives on IT consulting, workflow optimization, and business growth.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-12">
                {posts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group flex flex-col md:flex-row gap-8"
                  >
                    <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center space-x-4 text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">
                        <span className="px-3 py-1 bg-blue-50 rounded-full">{post.category}</span>
                        <span className="text-gray-400 flex items-center">
                          <Calendar size={14} className="mr-1" /> {post.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">
                        <Link to="#">{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User size={16} className="mr-2" /> {post.author}
                        </div>
                        <Link to="#" className="inline-flex items-center font-bold text-brand-blue hover:underline">
                          Read More <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-16 flex justify-center space-x-2">
                <button className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">1</button>
                <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center font-bold transition-colors">2</button>
                <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center font-bold transition-colors">3</button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Search */}
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <ul className="space-y-4">
                  {["IT Strategy", "Workflow Optimization", "Data Analytics", "Cybersecurity", "Digital Transformation"].map((cat) => (
                    <li key={cat}>
                      <Link to="#" className="flex justify-between items-center text-gray-600 hover:text-brand-blue transition-colors">
                        <span>{cat}</span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-500">12</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-brand-blue p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                <p className="text-blue-100 text-sm mb-6">Get the latest insights delivered straight to your inbox.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 outline-none transition-all"
                  />
                  <button className="w-full py-3 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
