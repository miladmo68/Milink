export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Business?</h2>
      <p className="mb-6 text-lg">
        Let's build something extraordinary together!
      </p>
      <button
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="btn btn-accent text-white"
      >
        Contact Us Now
      </button>
    </section>
  );
}
