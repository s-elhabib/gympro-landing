
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 dark:bg-gray-900">
      <div className="absolute inset-0 dark:bg-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #4A5568 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.1
        }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-[80px] leading-[1] font-medium tracking-[-0.02em] text-primary dark:text-white mb-8">
          Manage Your Gym<br />Like Never Before
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-xl text-primary/80 dark:text-gray-300">
            Streamline operations, boost revenue, and enhance member experience
            with our all-in-one gym management solution.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <button className="inline-flex items-center gap-2 bg-highlight dark:bg-blue-600 text-primary dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-highlight/90 dark:hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
          <button className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-primary dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
            Watch Demo
          </button>
        </div>

        <div className="max-w-[1000px] mx-auto glass dark:bg-gray-800/50 rounded-xl shadow-xl overflow-hidden">
          <img 
            src="/lovable-uploads/b51988b2-cfaa-493c-83e9-c11dbc1bdca5.png" 
            alt="Gym Management Dashboard" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
