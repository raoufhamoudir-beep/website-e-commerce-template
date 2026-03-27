import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const Contact = () => {
    return (
        <div className={`flex w-full  overflow-hidden  bg-[#0e0c16]`} >
            <div className="w-2/12 md:w-3/12 ">
            </div>
            <div className="flex-1 pl-5 pt-9 relative">
                <div
                    className={`absolute my-shadow bg-violet-600 h-full www left-0 top-9 -translate-y-[36px]`}
                ></div>

                <div className="w-10/12 pb-10">
                    <h4>find me on:</h4>
                    <div className="flex flex-wrap text-violet-600">
                        <a href="#" className="flex w-9/12 my-2 mx-auto md:w-4/12 items-center"><BsFacebook className="mx-2 " size={25} />abde raouf hamoudi</a>
                        <a href="#" className="flex w-9/12 my-2 mx-auto md:w-4/12 items-center"><BsInstagram className="mx-2 " size={25} />raouf_hamoudi</a>
                        <a href="#" className="flex w-9/12 my-2 mx-auto md:w-4/12 items-center"><BsGithub className="mx-2 " size={25} />raoufffffff</a>
                        <a href="#" className="flex w-9/12 my-2 mx-auto md:w-4/12 items-center"><MdEmail className="mx-2 " size={25} />raouf.hamoudi.r@gmail.com</a>
                    </div>
                </div>
                <button className="my-shadow bg-violet-500 text-white rounded-lg py-2 px-3 mb-6 hover:scale-110">GET ON TOUCH</button>
            </div>

        </div>
    )
}

export default Contact