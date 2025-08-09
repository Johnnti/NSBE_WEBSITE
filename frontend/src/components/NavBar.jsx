export default function NavBar({ text }){
    return (
        <a href="#">
        <div className={`w-30 h-18  sm:left-1 bg-black opacity-75 flex justify-center box-border py-3 flex-col font-[Space_Grotesk] ${text==="Donate" ?"bg-yellow-500 text-black hover:bg-black hover:opacity-100 hover:text-yellow-500" : 'hover:bg-black hover:text-yellow-500 hover:opacity-100 text-white' }`}>
        <span className='text-center text-md font-bold'>{text}</span>
      </div>
    </a>
    )
}