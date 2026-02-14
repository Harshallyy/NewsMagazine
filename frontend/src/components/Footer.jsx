const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            NewsMagazine
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Stay updated with the latest news from India and around the world.
            Built using React, Node.js and Guardian API.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/india" className="hover:text-white transition">India</a></li>
            <li><a href="/world" className="hover:text-white transition">World</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            A modern full-stack news platform delivering real-time
            updates with a clean and responsive design.
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} NewsMagazine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
