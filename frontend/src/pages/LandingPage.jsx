import IndustriesSection from "./IndustriesSection";
import {
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Users,
  CheckCircle2,
  MessageSquare,
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
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-red-600">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-red-600">
              Benefits
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-red-600">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/signin"
              className="rounded-full border border-red-200 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              Sign In
            </a>
            <a
              href="/signin"
              className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-red-200 bg-white px-4 py-1 text-sm font-medium text-red-600 shadow-sm">
              Smarter OJT Monitoring
            </div>

            <h2 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Modernize Your
              <span className="block text-red-600">OJT Experience</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
              Track attendance, monitor tasks, manage reports, and measure intern
              progress in one streamlined platform for students, supervisors, and coordinators.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/signin"
                className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
              >
                Sign In Now
              </a>
              <a
                href="#features"
                className="rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-300 hover:text-red-600"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-red-600">100%</p>
                <p className="text-sm text-gray-500">Digital monitoring</p>
              </div>
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-red-600">3 Roles</p>
                <p className="text-sm text-gray-500">Student, Supervisor, Coordinator</p>
              </div>
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-red-600">Real-time</p>
                <p className="text-sm text-gray-500">Progress tracking</p>
              </div>
            </div>
          </div>

          {/* HERO MOCKUP */}
          <div className="relative">
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
                <div className="rounded-2xl bg-red-50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">Attendance Rate</p>
                    <p className="text-sm font-bold text-red-600">96%</p>
                  </div>
                  <div className="h-3 rounded-full bg-red-100">
                    <div className="h-3 w-[96%] rounded-full bg-red-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <p className="text-sm text-gray-500">Tasks Completed</p>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">18</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <p className="text-sm text-gray-500">Reports Submitted</p>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">12</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">Weekly Progress</p>
                    <p className="text-xs text-gray-500">Updated today</p>
                  </div>

                  <div className="flex h-36 items-end gap-3">
                    {[45, 65, 55, 80, 70, 95, 85].map((h, i) => (
                      <div key={i} className="flex-1">
                        <div
                          className="w-full rounded-t-xl bg-red-500"
                          style={{ height: `${h}%` }}
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
                </div>
              </div>
            </div>

            <div className="absolute -left-6 -top-6 rounded-2xl bg-red-600 px-5 py-4 text-white shadow-xl">
              <p className="text-xs uppercase tracking-wide text-red-100">Reports</p>
              <p className="text-2xl font-extrabold">24</p>
            </div>

            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-red-100">
              <p className="text-xs uppercase tracking-wide text-gray-400">Performance</p>
              <p className="text-2xl font-extrabold text-red-600">Excellent</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* FEATURES */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Features
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Everything You Need for OJT Management
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Built for schools, supervisors, and students who need a simple and professional monitoring system.
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
                <div
                  key={index}
                  className="rounded-3xl border border-red-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={28} />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="leading-7 text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-red-50 py-20">
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
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-xl font-bold text-gray-900">For Students</h4>
              <p className="text-gray-600">
                Submit reports, check tasks, monitor attendance, and view personal progress.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-xl font-bold text-gray-900">For Supervisors</h4>
              <p className="text-gray-600">
                Review intern performance, verify reports, and monitor day-to-day activity.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-xl font-bold text-gray-900">For Coordinators</h4>
              <p className="text-gray-600">
                Oversee the full program, analytics, reports, and overall training progress.
              </p>
            </div>
            <div className="rounded-3xl bg-red-600 p-6 text-white shadow-sm">
              <h4 className="mb-2 text-xl font-bold">Modern & Simple</h4>
              <p className="text-red-100">
                Designed with a clean interface that feels professional and easy to use.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              Give students, supervisors, and coordinators a cleaner and more efficient way to manage internship progress.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/signin"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Go to Sign In
              </a>
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
      <footer id="contact" className="border-t border-red-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-red-600 px-3 py-2 text-lg font-bold text-white">
                OJT
              </div>
              <div>
                <h4 className="text-2xl font-extrabold">Track</h4>
                <p className="text-sm text-gray-500">On-the-Job Training System</p>
              </div>
            </div>
            <p className="max-w-md text-gray-600">
              A red-and-white modern platform for attendance, reports, analytics, and communication in OJT programs.
            </p>
          </div>

          <div>
            <h5 className="mb-4 font-bold text-gray-900">Navigation</h5>
            <div className="space-y-3 text-sm text-gray-600">
              <a href="#home" className="block hover:text-red-600">Home</a>
              <a href="#features" className="block hover:text-red-600">Features</a>
              <a href="#benefits" className="block hover:text-red-600">Benefits</a>
            </div>
          </div>

          <div>
            <h5 className="mb-4 font-bold text-gray-900">Access</h5>
            <div className="space-y-3 text-sm text-gray-600">
              <a href="/signin" className="block hover:text-red-600">Sign In</a>
              <a href="/signin" className="block hover:text-red-600">Get Started</a>
              <p className="text-gray-500">Email: support@ojttrack.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-100 px-6 py-4 text-center text-sm text-gray-500">
          © 2026 OJT Track. All rights reserved.
        </div>
      </footer>
    </div>
  );
}