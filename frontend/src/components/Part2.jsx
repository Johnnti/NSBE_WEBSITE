export default function Part2(){
  return (
    <section className="flex flex-col md:flex-row h-screen border-4 border-red-500">
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-blue-200 flex items-center justify-center">
        LEFT SIDE
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-green-200">
        <h2 className="text-3xl font-semibold mb-4">STEM Advocacy</h2>
        <p className="text-gray-800 max-w-md leading-relaxed">
          NSBE Dronabling advocates for diversity and inclusion in STEM fields.
        </p>
      </div>
    </section>
  );
}