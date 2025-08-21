export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">KaizenWare.online</h3>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
          </div>
          <p className="text-gray-400">
            © 2025 KaizenWare. Continuous improvement, infinite possibilities.
          </p>
        </div>
      </div>
    </footer>
  )
}