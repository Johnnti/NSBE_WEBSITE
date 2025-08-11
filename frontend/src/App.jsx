import "./App.css";
import NavBar from "./components/NavBar";
import Page4 from "./pages/Page4";

function App() {
  return (
    <div className="relative w-full h-full font-[Space_Grotesk]">
      <video 
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="/src/assets/background_video_nsbe_website.mp4"
        autoPlay
        loop
        muted
      />
      <div className="w-full z-10 h-10 bg-yellow-500 fixed top-0 left-0 flex justify-center"><img src="/src/assets/nsbe-seeklogo.svg" 
      className="w-12 h-10"/>
      </div>

      <div className="relative top-11 flex flex-row gap-x-5 lg:gap-x-70 lg:px-20">
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
      <div className="relative h-fit w-200 flex flex-col text-white top-20 m-30 gap-y-10">
        <h1 className="text-8xl">Empowering Future Black Engineers</h1>
        <span className="text-4xl font-bold">NSBE Grambling:Building a Legacy of Excellence</span>
        <a href="#" className="w-50 h-15 bg-yellow-500 text-center py-5 hover:bg-black hover:text-yellow-500 font-bold text-black">Get Involved</a>
      </div>
      <Page4/>
    </div>
  );
}

export default App;
  