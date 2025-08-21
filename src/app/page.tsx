export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
          DOMAIN FOR SALE
        </h1>
        
        <div className="space-y-4 mb-8">
          <div className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400">
            butuhsolusi.com
          </div>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">+</div>
          <div className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400">
            butuhsolusi.id
          </div>
        </div>
        
        <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Contact:
          <a 
            href="https://www.instagram.com/laode_saady/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            https://www.instagram.com/laode_saady/
          </a>
        </div>
      </div>
    </div>
  );
}
