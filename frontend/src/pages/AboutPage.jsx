import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Activity,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-red-600 px-3 py-2 text-lg font-bold text-white">
              OJT
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">Track</h1>
              <p className="text-xs text-gray-500">On-the-Job Training System</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <Link to="/features" className="hover:text-red-600">Features</Link>
            <Link to="/about" className="text-red-600 font-semibold">About</Link>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </nav>

          <div className="flex gap-3">
            <Link
              to="/pricing"
              className="border border-red-200 px-4 py-2 rounded-full text-red-600 hover:bg-red-50"
            >
              Pricing
            </Link>
            <Link
              to="/signin"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl font-extrabold"
          >
            About <span className="text-red-600">OJT Track</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600"
          >
            OJT Track is built to simplify internship management by bringing
            attendance, tasks, reports, and monitoring into one centralized
            platform for students, supervisors, and coordinators.
          </motion.p>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h3 className="text-4xl font-bold">
              Why We Built This System
            </h3>
            <p className="mt-6 text-gray-600 leading-8">
              Traditional internship tracking often relies on manual logs,
              scattered records, and inconsistent monitoring. OJT Track was
              created to solve these problems by providing a structured,
              digital-first solution.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Our goal is to improve visibility, reduce manual work, and help
              institutions manage internships more efficiently without adding
              complexity.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: ClipboardList, label: "Attendance Tracking" },
              { icon: Activity, label: "Progress Monitoring" },
              { icon: BarChart3, label: "Analytics Insights" },
              { icon: ShieldCheck, label: "Secure Access" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div className="bg-red-50 p-6 rounded-2xl">
                  <Icon className="text-red-600 mb-3" />
                  <p className="font-semibold">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-red-50 py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold">Our Core Values</h3>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Clarity in monitoring",
              "Efficiency in workflows",
              "Accountability for progress",
              "Better collaboration",
              "Simplified processes",
              "Reliable tracking",
            ].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <CheckCircle2 className="text-red-600 mb-2" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center">
            Who This Platform Helps
          </h3>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Students",
                desc: "Track attendance, manage tasks, and submit reports easily.",
              },
              {
                icon: Users,
                title: "Supervisors",
                desc: "Monitor progress and review intern performance.",
              },
              {
                icon: Users,
                title: "Coordinators",
                desc: "Oversee the entire internship program effectively.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div className="border p-6 rounded-2xl">
                  <Icon className="text-red-600 mb-3" />
                  <h4 className="font-bold text-xl">{item.title}</h4>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t py-12 text-center">
        <p className="text-gray-400">
          © 2026 OJT Track. All rights reserved.
        </p>
      </footer>
    </div>
  );
}