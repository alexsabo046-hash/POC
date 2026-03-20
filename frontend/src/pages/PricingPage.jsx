import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect } from "react";

const plans = [
  {
    name: "Starter",
    price: "$15",
    subtitle: "per user / month",
    features: [
      "Single program support",
      "Attendance tracking",
      "Task and report monitoring",
      "Email support",
      "2 supervisor seats",
    ],
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Professional",
    price: "$23",
    subtitle: "per user / month",
    features: [
      "Includes Starter features",
      "Multiple programs",
      "Unlimited supervisor seats",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Choose Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "Contact us for pricing",
    features: [
      "Includes Professional features",
      "Multiple organizations",
      "Dedicated account support",
      "Custom branding",
      "System integrations",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45 },
  },
};

export default function PricingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-white to-red-200" />
      <div className="absolute inset-0 backdrop-blur-md bg-white/30" />

      {/* Close button */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="absolute right-6 top-6 z-50 rounded-full border border-red-200 bg-white/80 p-2 text-red-600 shadow-md backdrop-blur hover:bg-white"
        aria-label="Close pricing page"
      >
        <X size={20} />
      </motion.button>

      {/* Centered modal content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-7xl rounded-[2rem] border border-red-100 bg-white/80 p-8 shadow-2xl backdrop-blur-xl md:p-10"
        >
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Pricing Plans
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Get Started Today
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose the right plan for your OJT platform setup.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`rounded-[2rem] p-8 shadow-lg transition ${
                  plan.featured
                    ? "bg-gradient-to-br from-red-600 to-red-500 text-white ring-2 ring-red-200"
                    : "border border-red-100 bg-white text-gray-900"
                }`}
              >
                <div className="mb-6">
                  {plan.featured && (
                    <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold text-red-600">
                      Most Popular
                    </div>
                  )}

                  <h2 className="text-3xl font-extrabold">{plan.name}</h2>

                  <div className="mt-4">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <p
                      className={`mt-1 text-sm ${
                        plan.featured ? "text-red-100" : "text-gray-500"
                      }`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 rounded-full p-1 ${
                          plan.featured
                            ? "bg-white/20 text-white"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <Check size={14} />
                      </div>
                      <p className={plan.featured ? "text-white" : "text-gray-700"}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/signin"
                    className={`block w-full rounded-xl px-5 py-3 text-center font-semibold transition ${
                      plan.featured
                        ? "bg-white text-red-600 hover:bg-red-50"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center text-sm text-gray-500">
            Press <span className="font-semibold">Esc</span> or click{" "}
            <span className="font-semibold">X</span> to return to the landing page.
          </div>
        </motion.div>
      </div>
    </div>
  );
}