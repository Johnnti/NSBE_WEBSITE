import Statistic from '../components/Statistic.jsx'
export default function Page4(){
    let statistics = [
        {title: "1985", desc: "Year of Establishment"},
        {title: "1000+", desc: "Members"},
        {title: "50+", desc: "Majors Represented"},
        {title: "30+", desc: "Industry Partners"}
    ]
    return (
        <div className="bg-[url('/src/assets/library.jpg')] bg-center bg-cover bg-no-repeat w-full h-screen relative">
            <div className="w-full h-full bg-[rgba(0,0,0,0.4)] flex flex-row">
                <div className="mt-30 text-white w-6/10 ml-30">
                    <p className="mb-5 text-xl">Our Mission</p>
                    <p className="mb-5 text-5xl text-yellow-500">Empowering Black Engineers</p>
                    <p className="w-120 mb-10">NSBE Grambling is committed to fostering an environment that empowers and supports Black engineering students. We aim to provide resources, guidance, and a sense of community to help our members excel academically and professionally.</p>
                    <div className="statistics w-fit h-4/10 border border-yellow-500 border-4 flex gap-x-15">
                        {statistics.map((stat) => {
                            return <Statistic 
                                title={stat.title}
                                desc={stat.desc}
                            />
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}