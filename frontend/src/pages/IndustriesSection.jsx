import {
  Wheat,
  Plane,
  HardHat,
  Scissors,
  ChefHat,
  Cross,
  Shield,
  Shovel,
  Cog,
  Anchor,
  Truck,
  Wrench,
} from "lucide-react";

const industries = [
  { icon: Wheat, label: "Agriculture" },
  { icon: Plane, label: "Aviation" },
  { icon: HardHat, label: "Construction" },
  { icon: Scissors, label: "Cosmetology" },
  { icon: ChefHat, label: "Culinary Arts" },
  { icon: Cross, label: "Healthcare" },
  { icon: Shield, label: "Information Technology" },
  { icon: Shovel, label: "Landscaping" },
  { icon: Cog, label: "Maintenance & Repair" },
  { icon: Anchor, label: "Marine" },
  { icon: Truck, label: "Transportation" },
  { icon: Wrench, label: "All Trades" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Built For Hands-On Careers
          </h2>
          <p className="mt-5 text-lg leading-8 text-red-100">
            OJT Track is designed to support diverse industries. From technical
            trades to service sectors, the platform helps students, supervisors,
            and coordinators track real-world training more effectively.
          </p>
        </div>

        <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-red-100">
                  <Icon size={34} strokeWidth={2.2} />
                </div>

                <p className="text-xl font-semibold leading-snug text-white">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}