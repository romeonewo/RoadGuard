
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-600">RoadGuard</h2>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#report" className="text-gray-700 hover:text-blue-600">
              Report Hazard
            </a>
          </li>
          <li>
            <a href="#map" className="text-gray-700 hover:text-blue-600">
              View Map
            </a>
          </li>
          <li>
            <a href="#login" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Welcome to RoadGuard
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Easily report road hazards and view community submissions on an interactive map to make our roads safer together.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="#report"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Report Hazard
          </a>
          <a
            href="#map"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition"
          >
            View Map
          </a>
        </div>
      </header>

      {/* Placeholder for content sections */}
      <main className="p-8">
        {/* Report Section Anchor */}
        <section id="report" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-800">Report a Hazard</h2>
          <p className="mt-2 text-gray-600">
            Navigate to the report page to submit a new road hazard.
          </p>
        </section>

        {/* Map Section Anchor */}
        <section id="map" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-800">View Hazard Map</h2>
          <p className="mt-2 text-gray-600">
            Check out all reported hazards on our live interactive map.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white shadow-inner p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RoadGuard. All rights reserved.
      </footer>
    </div>
  );
}
