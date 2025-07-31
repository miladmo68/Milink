export default function Portfolio() {
  const projects = [
    {
      img: "https://picsum.photos/id/1011/800/600",
      title: "Corporate Website",
    },
    { img: "https://picsum.photos/id/1025/800/600", title: "Brand Identity" },
    { img: "https://picsum.photos/id/1035/800/600", title: "E-Commerce Store" },
    {
      img: "https://picsum.photos/id/1041/800/600",
      title: "Marketing Campaign",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Portfolio</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg font-semibold">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
