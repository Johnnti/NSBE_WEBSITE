export default function NavBar({ text }){
    return (
        <>
        <div className='w-30 h-18 hover:bg-yellow-500 hover:text-black sm:left-1 bg-black opacity-75 text-white flex justify-center box-border py-3 flex-col font-[Space_Grotesk]'>
        <span className='text-center text-md font-thin hover:font-bold'>{text}</span>
      </div>
        </>
    )
}