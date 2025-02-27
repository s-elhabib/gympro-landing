
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary dark:text-white">
            GymPro
          </div>
          
          <div className="flex items-center gap-8">
            <ThemeToggle />
            <button className="bg-highlight dark:bg-blue-600 text-primary dark:text-white px-4 py-2 rounded-lg font-medium hover:bg-highlight/90 dark:hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
