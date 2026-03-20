import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IndustriesSection from "./IndustriesSection";
import {
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Users,
  CheckCircle2,
  MessageSquare,
  BadgeCheck,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-600 px-3 py-2 text-lg font-bold text-white shadow-sm">
              OJT
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">Track</h1>
              <p className="text-xs text-gray-500">On-the-Job Training System</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium text-red-600">
              Home
            </a>
            <Link
              to="/features"
              className="text-sm font-medium text-gray-700 hover:text-red-600"
            >
              Features
            </Link>
            <a
              href="#About"
              className="text-sm font-medium text-gray-700 hover:text-red-600"
            >
              <Link to="/about">About</Link>
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-red-600"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/pricing"
              className="rounded-full border border-red-200 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              Sign In
            </Link>
            <Link
              to="/pricing"
              className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 inline-flex rounded-full border border-red-200 bg-white px-4 py-1 text-sm font-medium text-red-600 shadow-sm">
              Smarter OJT Monitoring
            </div>

            <h2 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Modernize Your
              <span className="block text-red-600">OJT Experience</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
              Track attendance, monitor tasks, manage reports, and measure intern
              progress in one streamlined platform for students, supervisors, and
              coordinators.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/pricing"
                className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
              >
                Sign In Now
              </Link>
              <Link
                to="/features"
                className="rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-300 hover:text-red-600"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["100%", "Digital monitoring"],
                ["3 Roles", "Student, Supervisor, Coordinator"],
                ["Real-time", "Progress tracking"],
              ].map(([title, text], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-red-600">{title}</p>
                  <p className="text-sm text-gray-500">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-red-100 bg-white p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">OJT Dashboard</p>
                  <p className="text-xs text-gray-500">Student Progress Overview</p>
                </div>
                <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                  Active
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-2xl bg-red-50 p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">Attendance Rate</p>
                    <p className="text-sm font-bold text-red-600">96%</p>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-red-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "96%" }}
                      transition={{ duration: 1 }}
                      className="h-3 rounded-full bg-red-600"
                    />
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="rounded-2xl border border-gray-100 p-4"
                  >
                    <p className="text-sm text-gray-500">Tasks Completed</p>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">18</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="rounded-2xl border border-gray-100 p-4"
                  >
                    <p className="text-sm text-gray-500">Reports Submitted</p>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">12</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="rounded-2xl border border-gray-100 p-4"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">Weekly Progress</p>
                    <p className="text-xs text-gray-500">Updated today</p>
                  </div>

                  <div className="flex h-36 items-end gap-3">
                    {[45, 65, 55, 80, 70, 95, 85].map((h, i) => (
                      <div key={i} className="flex h-full flex-1 items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.7, delay: 0.9 + i * 0.08 }}
                          className="w-full rounded-t-xl bg-red-500"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-between text-xs text-gray-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -left-6 -top-6 rounded-2xl bg-red-600 px-5 py-4 text-white shadow-xl"
            >
              <p className="text-xs uppercase tracking-wide text-red-100">Reports</p>
              <p className="text-2xl font-extrabold">24</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-red-100"
            >
              <p className="text-xs uppercase tracking-wide text-gray-400">Performance</p>
              <p className="text-2xl font-extrabold text-red-600">Excellent</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* WHY YOUR COMPANY NEEDS US */}
      <motion.section
        className="bg-white py-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Why Your Company Needs Us
            </h3>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              OJT Track helps companies build a more organized, transparent, and efficient
              internship process. From monitoring intern growth to simplifying supervision,
              the platform supports better training outcomes for everyone involved.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Higher Intern Engagement",
                desc: "Interns stay more involved when they can clearly see their assigned tasks, training goals, and overall progress throughout the program.",
              },
              {
                icon: BadgeCheck,
                title: "Better Evaluation Quality",
                desc: "Supervisors can review submissions, verify task completion, and assess intern development with more consistency and accountability.",
              },
              {
                icon: ClipboardList,
                title: "Stronger Training Consistency",
                desc: "Maintain a structured workflow across departments and internship batches so learners follow a more unified and reliable training experience.",
              },
              {
                icon: ShieldCheck,
                title: "Easier Program Oversight",
                desc: "School coordinators and company supervisors can oversee attendance, reports, and performance records in one centralized system with less manual work.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-red-100 bg-red-50 p-8 shadow-sm"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-red-600 shadow-sm">
                    <Icon size={40} strokeWidth={2.2} />
                  </div>

                  <h4 className="mb-4 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="text-lg leading-8 text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        id="features"
        className="bg-white py-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Features
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Everything You Need for OJT Management
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Built for schools, supervisors, and students who need a simple and
              professional monitoring system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                title: "Attendance Tracking",
                desc: "Monitor daily attendance records quickly and accurately.",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                desc: "Visualize student progress, submissions, and completion rates.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Role Access",
                desc: "Dedicated portals for students, supervisors, and coordinators.",
              },
              {
                icon: Users,
                title: "Intern Management",
                desc: "Organize students and supervisors in one structured system.",
              },
              {
                icon: CheckCircle2,
                title: "Task & Report Monitoring",
                desc: "Track assigned tasks and submitted accomplishment reports.",
              },
              {
                icon: MessageSquare,
                title: "Built-in Communication",
                desc: "Keep collaboration smooth through messages and updates.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-red-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={28} />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="leading-7 text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/features"
              className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
            >
              View Full Features Page
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="bg-red-50 py-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Why Choose Us
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              A Better Way to Manage Internships
            </h3>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Replace manual logs and scattered records with a centralized system
              that saves time and improves visibility for everyone involved.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Faster attendance and report checking",
                "Better visibility of student performance",
                "Cleaner communication between roles",
                "Professional and modern monitoring workflow",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-gray-700">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-xl font-bold text-gray-900">For Students</h4>
              <p className="text-gray-600">
                Submit reports, check tasks, monitor attendance, and view personal
                progress.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-xl font-bold text-gray-900">For Supervisors</h4>
              <p className="text-gray-600">
                Review intern performance, verify reports, and monitor day-to-day
                activity.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-xl font-bold text-gray-900">For Coordinators</h4>
              <p className="text-gray-600">
                Oversee the full program, analytics, reports, and overall training
                progress.
              </p>
            </div>
            <div className="rounded-3xl bg-red-600 p-6 text-white shadow-sm">
              <h4 className="mb-2 text-xl font-bold">Modern & Simple</h4>
              <p className="text-red-100">
                Designed with a clean interface that feels professional and easy
                to use.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] bg-gradient-to-r from-red-600 to-red-500 px-8 py-14 text-center text-white shadow-2xl md:px-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
              Start Now
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight">
              Ready to Improve Your OJT Workflow?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
              Give students, supervisors, and coordinators a cleaner and more
              efficient way to manage internship progress.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/pricing"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Go to Sign In
              </Link>
              <a
                href="#contact"
                className="rounded-full border border-red-200 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="rounded-xl bg-red-600 px-4 py-2 text-xl font-bold text-white">
              OJT
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Track</h2>
          </div>

          <div className="mb-6 flex flex-wrap justify-center gap-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-red-600">Home</a>
            <Link to="/features" className="hover:text-red-600">
              Features
            </Link>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <Link to="/pricing" className="hover:text-red-600">
              Sign In
            </Link>
            <Link to="/pricing" className="hover:text-red-600">
              Sign Up
            </Link>
            <span>Privacy Policy</span>
          </div>

          <p className="text-sm text-gray-400">
            © 2026 OJT Track. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}