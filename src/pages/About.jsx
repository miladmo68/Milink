export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://picsum.photos/id/1069/1200/800.jpg"
          alt="About"
          className="rounded shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            About Milink
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We create responsive websites & branding solutions to help
            businesses thrive digitally.
          </p>
        </div>
      </div>
    </section>
  );
}
