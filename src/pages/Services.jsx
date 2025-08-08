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
  const mainServices = [
    {
      title: "Web Design & Development",
      desc: "Fast, responsive websites that impress and convert visitors into customers.",
      icon: CodeBracketIcon,
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive, user-friendly interfaces that keep your audience engaged.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google, attract quality traffic, and grow your reach.",
      icon: MagnifyingGlassIcon,
    },
    {
      title: "E-Commerce Solutions",
      desc: "Secure, scalable stores built for higher sales and retention.",
      icon: ShoppingCartIcon,
    },
    {
      title: "Website Maintenance & Redesign",
      desc: "Keep your site fresh, secure, and fast—with modern design upgrades.",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Branding & Logo Design",
      desc: "Memorable identities and logos that set you apart.",
      icon: PaintBrushIcon,
    },
  ];

  // حرفه‌ای‌های تکمیلی (پایین صفحه)
  const extraServices = [
    {
      title: "Performance & Accessibility Audit",
      desc: "Fix slow pages and a11y gaps to improve SEO, conversions, and trust.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Analytics & Conversion Setup (GA4)",
      desc: "Track events, funnels, and goals—scale what actually converts.",
      icon: ChartBarIcon,
    },
    {
      title: "Image & Asset Optimization",
      desc: "Smaller, smarter assets (WebP, srcset) for faster loads and better rankings.",
      icon: PhotoIcon,
    },
  ];

  const ServiceCard = ({ icon: Icon, title, desc }) => (
    <div className="card bg-base-200 p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
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

      {/* More Services (same page) */}
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

// import {
//   CodeBracketIcon,
//   PaintBrushIcon,
//   MagnifyingGlassIcon,
//   ShoppingCartIcon,
//   WrenchScrewdriverIcon,
//   ChatBubbleLeftRightIcon,
//   MegaphoneIcon,
//   DevicePhoneMobileIcon,
// } from "@heroicons/react/24/outline";

// export default function Services() {
//   const services = [
//     {
//       title: "Web Design & Development",
//       desc: "Modern, responsive websites tailored to your brand, optimized for performance and user experience.",
//       icon: <CodeBracketIcon className="h-10 w-10 mx-auto text-primary" />,
//     },
//     {
//       title: "Branding & Logo Design",
//       desc: "Creative visual identity, professional logos, and cohesive branding to make your business stand out.",
//       icon: <PaintBrushIcon className="h-10 w-10 mx-auto text-secondary" />,
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Boost your search engine rankings, drive organic traffic, and improve online visibility with proven SEO strategies.",
//       icon: <MagnifyingGlassIcon className="h-10 w-10 mx-auto text-accent" />,
//     },
//     {
//       title: "E-Commerce Solutions",
//       desc: "Scalable and secure online stores designed to maximize sales and customer satisfaction.",
//       icon: <ShoppingCartIcon className="h-10 w-10 mx-auto text-info" />,
//     },
//     {
//       title: "Website Redesign & Maintenance",
//       desc: "Revamp outdated websites and provide ongoing maintenance for optimal performance and security.",
//       icon: (
//         <WrenchScrewdriverIcon className="h-10 w-10 mx-auto text-warning" />
//       ),
//     },
//     {
//       title: "Social Media Management",
//       desc: "Engaging content creation, scheduling, and audience growth across major social media platforms.",
//       icon: (
//         <ChatBubbleLeftRightIcon className="h-10 w-10 mx-auto text-success" />
//       ),
//     },
//     {
//       title: "Google Ads & Digital Marketing",
//       desc: "Targeted advertising campaigns that generate leads, increase conversions, and grow your business.",
//       icon: <MegaphoneIcon className="h-10 w-10 mx-auto text-error" />,
//     },
//     {
//       title: "UI/UX Design",
//       desc: "User-friendly designs and intuitive interfaces to improve customer engagement and satisfaction.",
//       icon: (
//         <DevicePhoneMobileIcon className="h-10 w-10 mx-auto text-primary" />
//       ),
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-base-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-12">Our Services</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="card bg-base-200 shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
//             >
//               {s.icon}
//               <h3 className="text-xl font-semibold mt-4 mb-2">{s.title}</h3>
//               <p>{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
