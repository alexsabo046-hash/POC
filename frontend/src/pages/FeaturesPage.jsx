import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Users,
  CheckCircle2,
  MessageSquare,
  FileText,
  BellRing,
  UserCheck,
  Layers3,
  LockKeyhole,
  Database,
  Clock3,
  FolderKanban,
  Activity,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featureCards = [
  {
    icon: ClipboardList,
    title: "Attendance Tracking",
    desc: "Monitor daily attendance records in a cleaner and more reliable digital workflow.",
  },
  {
    icon: FolderKanban,
    title: "Task Monitoring",
    desc: "Track assigned tasks, progress updates, and completion status in one organized system.",
  },
  {
    icon: FileText,
    title: "Report Submission",
    desc: "Students can submit accomplishment reports while supervisors can review them efficiently.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "View attendance trends, report completion, and performance summaries through visual insights.",
  },
  {
    icon: MessageSquare,
    title: "Integrated Communication",
    desc: "Improve coordination between students, supervisors, and coordinators through messaging tools.",
  },
  {
    icon: BellRing,
    title: "Notifications & Reminders",
    desc: "Reduce delays and missed tasks through timely reminders and activity-based alerts.",
  },
];

const roleCards = [
  {
    icon: UserCheck,
    title: "Student Portal",
    desc: "Students can record attendance, track assigned work, submit reports, and monitor their own progress throughout the internship.",
    items: [
      "Attendance logging",
      "Task progress updates",
      "Report submission",
      "Personal tracking dashboard",
    ],
  },
  {
    icon: Users,
    title: "Supervisor Portal",
    desc: "Supervisors can monitor intern performance, review submitted outputs, and provide more structured oversight during the training period.",
    items: [
      "Review intern reports",
      "Monitor attendance records",
      "Track completion status",
      "Evaluate progress consistently",
    ],
  },
  {
    icon: Layers3,
    title: "Coordinator Portal",
    desc: "Coordinators gain a broader view of the program, helping them oversee intern activity, reports, and overall performance across the organization.",
    items: [
      "Program-wide monitoring",
      "Intern and supervisor overview",
      "Progress visibility",
      "Centralized reporting access",
    ],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Sign in to the system",
    desc: "Users access the platform using their assigned role and immediately see the tools relevant to them.",
  },
  {
    number: "02",
    title: "Record and manage activity",
    desc: "Attendance, tasks, and reports are captured in one place for easier organization and monitoring.",
  },
  {
    number: "03",
    title: "Review and validate progress",
    desc: "Supervisors and coordinators can evaluate submissions and track development more efficiently.",
  },
  {
    number: "04",
    title: "Use insights for better decisions",
    desc: "Analytics and summaries help improve visibility and support better internship management.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-red-600 px-3 py-2 text-lg font-bold text-white shadow-sm">
              OJT
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">Track</h1>
              <p className="text-xs text-gray-500">On-the-Job Training System</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-red-600"
            >
              Home
            </Link>
            <a href="#overview" className="text-sm font-medium text-red-600">
              Features
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-gray-700 hover:text-red-600"
            >
              Benefits
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
              Pricing
            </Link>
            <Link
              to="/signin"
              className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="overview"
        className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          {/* LEFT SIDE */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="mb-4 inline-flex rounded-full border border-red-200 bg-white px-4 py-1 text-sm font-medium text-red-600 shadow-sm">
              Complete Feature Overview
            </div>

            <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Explore the Tools Behind
              <span className="block text-red-600">OJT Track</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              OJT Track is designed to simplify internship management through
              attendance monitoring, task tracking, report submission, analytics,
              and structured access for every user role.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/pricing"
                className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
              >
                Get Started
              </Link>
              <Link
                to="/"
                className="rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-300 hover:text-red-600"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    System Preview
                  </p>
                  <p className="text-xs text-gray-500">
                    How features connect together
                  </p>
                </div>
                <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                  Feature Flow
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-red-50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Attendance Module
                      </p>
                      <p className="text-xs text-gray-500">
                        Daily log and time monitoring
                      </p>
                    </div>
                    <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-600 shadow-sm">
                      Active
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-2 flex-1 rounded-full bg-red-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "88%" }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-red-500"
                      />
                    </div>
                    <span className="text-xs font-semibold text-red-600">
                      88%
                    </span>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-gray-100 p-4"
                  >
                    <p className="text-sm text-gray-500">Tasks Reviewed</p>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">
                      142
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.16 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-gray-100 p-4"
                  >
                    <p className="text-sm text-gray-500">Reports Submitted</p>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">
                      87
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.24 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-100 p-4"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">
                      Workflow Steps
                    </p>
                    <p className="text-xs text-gray-500">
                      Student to Coordinator
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["01", "Student logs attendance"],
                      ["02", "Tasks are updated"],
                      ["03", "Supervisor reviews report"],
                      ["04", "Coordinator checks progress"],
                    ].map(([num, label], i) => (
                      <motion.div
                        key={num}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-3"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                          {num}
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          {label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-5 -top-5 rounded-2xl bg-red-600 px-5 py-4 text-white shadow-xl"
            >
              <p className="text-xs uppercase tracking-wide text-red-100">
                Preview
              </p>
              <p className="text-2xl font-extrabold">Feature Flow</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <motion.section
        id="workflow"
        className="bg-white py-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Workflow
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              How the Platform Works
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              A streamlined process helps students, supervisors, and coordinators
              stay aligned throughout the internship lifecycle.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="rounded-3xl border border-red-100 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
                  Step {step.number}
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">
                  {step.title}
                </h4>
                <p className="leading-7 text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CORE FEATURES */}
      <motion.section
        className="bg-red-50 py-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Core Features
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              More Than Just Monitoring
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              The platform combines multiple tools into one integrated experience,
              making internship management more efficient and more organized.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-red-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={28} />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="leading-7 text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ROLE-BASED FEATURES */}
      <motion.section
        id="roles"
        className="bg-white py-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Role-Based Experience
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Built for Every Type of User
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Each role gets focused tools that make the platform easier to use
              and more relevant to their responsibilities.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {roleCards.map((role) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  variants={fadeUp}
                  className="rounded-[2rem] border border-red-100 bg-white p-8 shadow-sm"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={30} />
                  </div>
                  <h4 className="mb-3 text-2xl font-bold text-gray-900">
                    {role.title}
                  </h4>
                  <p className="mb-6 leading-7 text-gray-600">{role.desc}</p>

                  <div className="space-y-3">
                    {role.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                          <CheckCircle2 size={14} />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* BENEFITS / EXTRA VALUE */}
      <motion.section
        id="benefits"
        className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 py-20 text-white"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
              Benefits
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight">
              Why These Features Matter
            </h3>
            <p className="mt-5 text-lg leading-8 text-red-100">
              OJT Track does not just digitize records. It helps improve
              visibility, reduce manual work, support evaluations, and create a
              smoother process for everyone involved in internship management.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock3, label: "Less manual work" },
                { icon: Activity, label: "Clear progress visibility" },
                { icon: BarChart3, label: "Better reporting insights" },
                { icon: Users, label: "Improved coordination" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={20} />
                    </div>
                    <p className="font-semibold">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 text-gray-900 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">System Insights</p>
                <p className="text-xs text-gray-500">
                  Preview of monitored data
                </p>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                Analytics Ready
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-red-50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800">
                    Attendance Accuracy
                  </p>
                  <p className="text-sm font-bold text-red-600">94%</p>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-red-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-3 rounded-full bg-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-100 p-4">
                  <p className="text-sm text-gray-500">Tasks Reviewed</p>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    142
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 p-4">
                  <p className="text-sm text-gray-500">Reports Logged</p>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    87
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800">
                    Performance Snapshot
                  </p>
                  <p className="text-xs text-gray-500">Overview</p>
                </div>

                <div className="space-y-3">
                  {[
                    "Attendance monitored in real time",
                    "Tasks reviewed with better visibility",
                    "Reports organized in one workflow",
                    "Progress easier to evaluate",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECURITY */}
      <motion.section
        id="security"
        className="bg-white py-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Security & Structure
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Secure Access and Organized Records
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              OJT Track helps keep information organized and accessible only to
              the people who need it through clear role-based access.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: LockKeyhole,
                title: "Role-Based Access",
                desc: "Students, supervisors, and coordinators each have separate views and permissions aligned with their responsibilities.",
              },
              {
                icon: ShieldCheck,
                title: "Protected Sign-In",
                desc: "Account-based access helps ensure that only authorized users can enter the platform and view records.",
              },
              {
                icon: Database,
                title: "Centralized Records",
                desc: "Attendance, reports, and progress data are stored in one organized system for easier tracking and retrieval.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-red-100 bg-red-50 p-7 shadow-sm"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
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
        </div>
      </motion.section>

      {/* CTA */}
      <section className="bg-red-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-r from-red-600 to-red-500 px-8 py-14 text-center text-white shadow-2xl md:px-16"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
              Start Today
            </p>
            <h3 className="text-4xl font-extrabold tracking-tight">
              Ready to Use These Features?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
              Move from manual internship tracking to a cleaner and more modern
              digital workflow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/pricing"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                View Pricing
              </Link>
              <Link
                to="/signin"
                className="rounded-full border border-red-200 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <div className="mb-6 flex justify-center items-center gap-3">
            <div className="rounded-xl bg-red-600 px-4 py-2 text-xl font-bold text-white">
              OJT
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Track</h2>
          </div>

          <div className="mb-6 flex flex-wrap justify-center gap-8 text-gray-600 font-medium">
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
            <a href="#overview" className="hover:text-red-600">
              Features
            </a>
            <a href="#benefits" className="hover:text-red-600">
              Benefits
            </a>
            <a href="#contact" className="hover:text-red-600">
              Contact
            </a>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
            <Link to="/pricing" className="hover:text-red-600">
              Pricing
            </Link>
            <Link to="/signin" className="hover:text-red-600">
              Sign In
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