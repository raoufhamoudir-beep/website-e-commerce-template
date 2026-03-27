import { useTypewriter } from "react-simple-typewriter";

const LandingPage = () => {
    const [TypeEffect] = useTypewriter({
        words: ['web devloper', 'mobile apps dev'],
        typeSpeed: 300,
        delaySpeed: 100,
        loop: true
    })
    return (
        <div className=" pt-28 flex w-full h-screen">
            <div className="w-2/12 md:w-3/12 ">
            </div>
            <div className="flex-1 pl-5 pt-9 relative">
                <div
                    className="absolute my-shadow bg-violet-600 h-full www left-0 top-9"
                ></div>
                <h1 className='text-gray-500 hover:text-white text-md md:text-xl capitalize mb-4 -translate-y-3 w-fit purpel_point relative'>
                    start /&gt;</h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Hi, my name is <span className="text-violet-600 ">
                    raouf hamoudi
                </span></h1>
                <h3 className='text-3xl md:text-4xl lg:text-6xl font-bold relative mb-10'>i{`'`}m a  <span className=' text-white rounded-lg '> {TypeEffect}</span></h3>
                <h4 className='text-gray-400 text-xl mt-9 w-fit h-fit relative'>Let me show You ... </h4>
                <div className="absolute scroll-to-next">
                    <span className="scroll-text mx-4">scroll</span>
                    <span className="scroll-- mx-4"></span>
                </div>
            </div>
        </div>
    );
}

export default LandingPage