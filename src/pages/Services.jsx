import {
  CodeBracketIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      desc: "Modern, responsive websites tailored to your brand, optimized for performance and user experience.",
      icon: <CodeBracketIcon className="h-10 w-10 mx-auto text-primary" />,
    },
    {
      title: "Branding & Logo Design",
      desc: "Creative visual identity, professional logos, and cohesive branding to make your business stand out.",
      icon: <PaintBrushIcon className="h-10 w-10 mx-auto text-secondary" />,
    },
    {
      title: "SEO Optimization",
      desc: "Boost your search engine rankings, drive organic traffic, and improve online visibility with proven SEO strategies.",
      icon: <MagnifyingGlassIcon className="h-10 w-10 mx-auto text-accent" />,
    },
    {
      title: "E-Commerce Solutions",
      desc: "Scalable and secure online stores designed to maximize sales and customer satisfaction.",
      icon: <ShoppingCartIcon className="h-10 w-10 mx-auto text-info" />,
    },
    {
      title: "Website Redesign & Maintenance",
      desc: "Revamp outdated websites and provide ongoing maintenance for optimal performance and security.",
      icon: (
        <WrenchScrewdriverIcon className="h-10 w-10 mx-auto text-warning" />
      ),
    },
    {
      title: "Social Media Management",
      desc: "Engaging content creation, scheduling, and audience growth across major social media platforms.",
      icon: (
        <ChatBubbleLeftRightIcon className="h-10 w-10 mx-auto text-success" />
      ),
    },
    {
      title: "Google Ads & Digital Marketing",
      desc: "Targeted advertising campaigns that generate leads, increase conversions, and grow your business.",
      icon: <MegaphoneIcon className="h-10 w-10 mx-auto text-error" />,
    },
    {
      title: "UI/UX Design",
      desc: "User-friendly designs and intuitive interfaces to improve customer engagement and satisfaction.",
      icon: (
        <DevicePhoneMobileIcon className="h-10 w-10 mx-auto text-primary" />
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="card bg-base-200 shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              {s.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
