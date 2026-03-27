
const Titel = ({ titel, about, more }) => {

    return (
        <div className={`flex w-full  overflow-hidden  ${more || titel === 'contact' && "bg-[#0e0c16]"} ${titel === "About" && "bg-[#16141c]"}`} >

            <div className="w-2/12 md:w-3/12 ">
            </div>
            <div className="flex-1 pl-5 pt-9 relative">
                <div
                    className={`absolute my-shadow bg-violet-600 h-full www left-0 top-9 ${more && "-translate-y-[36px]"} ${titel === "About" || titel === "contact" && "-translate-y-[36px]"}`}
                ></div>
                <h1 className='text-gray-500 hover:text-white text-md md:text-xl capitalize mb-1 -translate-y-3 w-fit purpel_point relative'>
                    {titel} /&gt;</h1>
                <div className="w-10/12">
                    {about && <h2 className="jobs text-[22px] md:text-[30px] relative ">
                        {about}
                    </h2>}
                    {more && <h2 className="text-md">{more}</h2>}
                </div>
            </div>

        </div>
    )
}

export default Titel