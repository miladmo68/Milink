import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  // Main services (Top 3)
  const mainServices = [
    {
      title: "Web Design & Development",
      desc: "Fast, responsive websites that impress and convert visitors into customers.",
      icon: CodeBracketIcon,
      badge: "Popular",
      badgeTip:
        "Our most requested service — a perfect start for your online presence.",
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google, attract quality traffic, and grow your reach.",
      icon: MagnifyingGlassIcon,
      badge: "High ROI",
      badgeTip:
        "Delivers long-term value by attracting organic, ready-to-buy visitors.",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Secure, scalable stores built for higher sales and retention.",
      icon: ShoppingCartIcon,
      badge: "In Demand",
      badgeTip:
        "Ideal for businesses ready to sell products or services online.",
    },
  ];

  // More services (ordered by business impact)
  const extraServices = [
    {
      title: "Website Maintenance & Redesign",
      desc: "Keep your site fresh, secure, and fast—with modern design upgrades.",
      icon: WrenchScrewdriverIcon,
      badge: "Popular",
      badgeTip: "Essential for keeping your website healthy and up to date.",
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive, user-friendly interfaces that keep your audience engaged.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Analytics & Conversion Setup (GA4)",
      desc: "Track events, funnels, and goals—scale what actually converts.",
      icon: ChartBarIcon,
    },
    {
      title: "Performance & Accessibility Audit",
      desc: "Fix slow pages and a11y gaps to improve SEO, conversions, and trust.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Branding & Logo Design",
      desc: "Memorable identities and logos that set you apart.",
      icon: PaintBrushIcon,
    },
    {
      title: "Image & Asset Optimization",
      desc: "Smaller, smarter assets (WebP, srcset) for faster loads and better rankings.",
      icon: PhotoIcon,
    },
  ];

  const ServiceCard = ({ icon: Icon, title, desc, badge, badgeTip }) => (
    <div className="relative card bg-base-200 p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      {badge && (
        <div
          className="tooltip tooltip-left absolute right-3 top-3"
          data-tip={badgeTip}
        >
          {/* Pulse animation that pauses on hover; respects prefers-reduced-motion */}
          <span className="badge badge-primary motion-safe:animate-pulse hover:motion-safe:animate-none">
            {badge}
          </span>
        </div>
      )}
      <div className="flex flex-col items-center gap-3 text-center">
        <Icon className="h-12 w-12 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-base-content/80 text-left max-w-[34ch] sm:max-w-none">
          {desc}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Services */}
      <section id="services" className="py-20 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>

          <div className="mt-10">
            <a href="#more-services" className="btn btn-ghost">
              See more services ↓
            </a>
          </div>
        </div>
      </section>

      {/* More Services */}
      <section id="more-services" className="py-16 bg-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">More Ways We Can Help</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraServices.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
