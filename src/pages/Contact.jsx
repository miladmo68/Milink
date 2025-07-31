export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-base-200">
      <div className="container mx-auto grid gap-10 md:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
          className="card bg-base-100 shadow-xl p-6 space-y-4"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
        <div className="card bg-base-100 shadow-xl p-6 space-y-4">
          <h3 className="text-xl font-semibold">📍 Address</h3>
          <p>GTA, Ontario, Canada</p>
          <h3 className="text-xl font-semibold">📧 Email</h3>
          <p>info@milink.com</p>
          <h3 className="text-xl font-semibold">📞 Phone</h3>
          <p>+1 (437) 999-3668</p>
        </div>
      </div>
    </section>
  );
}
