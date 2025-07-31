export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-6">
      <div>
        <p className="font-bold">Milink Digital Agency</p>
        <p>
          📍 GTA, Ontario, Canada | 📧 info@milink.com | 📞 +1 (437) 999-3668
        </p>
        <p>© {new Date().getFullYear()} Milink. All rights reserved.</p>
      </div>
    </footer>
  );
}
