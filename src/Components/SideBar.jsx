
import Navbar from "./Navbar";

const SideBar = () => {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <div className="w-fit p-4 bg-gray-700">
        {/* Logo at the top */}
        <div className="mb-8">
          <img src="path-to-your-logo.png" alt="Logo" className="w-full h-auto" />
        </div>

        {/* Logos in the middle */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Other Logos</h2>
          <div className="mb-2">
            <img src="path-to-logo1.png" alt="Logo 1" className="w-full h-auto" />
          </div>
          <div className="mb-2">
            <img src="path-to-logo2.png" alt="Logo 2" className="w-full h-auto" />
          </div>
          {/* Add more logos as needed */}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 ">
        {/* Your main content goes here */}
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>Your content goes here.</p>
      </div>
    </div>
  );
};

export default SideBar;
