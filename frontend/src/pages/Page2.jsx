import dummyPic from '../assets/dummy_pic_1.jpg'

export default function Page2(){
  return (

  <section className="flex flex-col py-16 md:flex-col relative z-10 bg-yellow-500">
      <div className="w-full h-1/2 mb-12 ml-24 flex items-center">
        <div>
          <h3 className="text-2xl text-black font-semibold font-[Space_Grotesk]  mb-8">
            Igniting Passion for Engineering
          </h3>
          <h2 className="text-5xl text-cyan-800 font-[Space_Grotesk]">
            NSBE Grambling<br />
            Leading the Way in<br />
            Engineering Excellence
          </h2>
        </div>

        <button className="absolute right-0 bg-yellow-300 text-black font-[Space_Grotesk] font-semibold px-6 py-6 hover:bg-black hover:text-yellow-500 mr-24">
          Learn More
        </button>
      </div>


    <div className="flex flex-col md:flex-row flex-grow mb-6 ml-24">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl text-black font-[Space_Grotesk] font-semibold mb-8">Student Chapter</h2>

        <p className="text-lg text-black max-w-md font-[Space_Grotesk] leading-relaxed items-center md:antialiased">
          NSBE Grambling is dedicated to supporting
          and promoting the academic and
          professional success of Black engineering
          students. We provide a platform for personal
          and professional development through
          various programs and activities. Our chapter
          aims to create a strong community of future
          Black engineers.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex mr-24 justify-center">
        <img src={dummyPic} alt="NSBE Student" className='max-w-full h-auto rounded'></img>
      </div>
    </div>
  </section>

  );
}