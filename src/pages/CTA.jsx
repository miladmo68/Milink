export default function CTA() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto">
        <div className="card shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/90 to-accent/80 text-primary-content p-10 md:p-14">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to grow with a high-performing website?
            </h2>
            <p className="mt-3 md:mt-4 opacity-90">
              Launch fast, rank higher, and convert more leads — start with a
              free consult.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn btn-base-100 text-primary font-semibold hover:bg-base-200"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="btn btn-outline btn-ghost border-primary-content/80 text-primary-content font-semibold
                           hover:border-primary-content hover:bg-primary-content/15 hover:text-primary-content"
              >
                See Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function CTA() {
//   return (
//     <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
//       <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Business?</h2>
//       <p className="mb-6 text-lg">
//         Let's build something extraordinary together!
//       </p>
//       <button
//         onClick={() =>
//           document
//             .getElementById("contact")
//             .scrollIntoView({ behavior: "smooth" })
//         }
//         className="btn btn-accent text-white"
//       >
//         Contact Us Now
//       </button>
//     </section>
//   );
// }
