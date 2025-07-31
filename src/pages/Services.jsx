export default function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Modern responsive websites tailored to your brand.",
    },
    {
      title: "Branding",
      desc: "Visual identity and logos for professional branding.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve search engine rankings and visibility.",
    },
    { title: "E-Commerce", desc: "Online stores optimized for growth." },
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
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
