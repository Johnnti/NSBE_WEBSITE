import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="relative w-full h-screen">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/src/assets/background_video_nsbe_website.mp4"
        autoPlay
        loop
        muted
      />
      <div className="z-10 w-full h-10 bg-yellow-300 fixed top-0 left-0"></div>

      <div className="fixed top-11 flex flex-row gap-x-5 lg:gap-x-70 lg:px-20">
        <div className="border border-1 border-yellow-500 w-30 h-25 sm:left-1 bg-black opacity-75 text-white flex justify-center box-border py-3 flex-col font-[Space_Grotesk] ">
          <span className="text-3xl text-center">NSBE</span>
          <span className="text-center text-md font-thin">
            Grambling Chapter
          </span>
        </div>
        <div className="flex w-fit h-fit flex-row border border-1 border-yellow-500">
          {["Home", "Contact", "Programs", "Leadership", "Membership", "Donate"].map(
            (text) => (
              <NavBar text={text} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
