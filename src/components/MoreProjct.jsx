import { useState } from "react"
const MoreProjct = () => {
    const codepen = [
        {
            name: "🌧️ Rain Game 🔥 (Opposites challenge)",
            link: "https://codepen.io/Yasio/full/vYYNWxB",
            img: "https://yasio.dev/gallery/webp/raingame.webp"
        },
        {
            name: "🥑 Avocado and Kiwi 🥝 in CANDYLAND",
            link: "https://codepen.io/Yasio/full/pooZMmX",
            img: "https://yasio.dev/gallery/webp/avocadogame.webp"
        },
        {
            name: "Select Your Coding Hero!",
            link: "https://codepen.io/Yasio/details/eXBRYP",
            img: "https://yasio.dev/gallery/webp/heroes.webp"
        },
        {
            name: "Ghost Boo-sters 👻 - the game 🎮",
            link: "https://codepen.io/Yasio/details/GYqVPO",
            img: "https://yasio.dev/gallery/webp/ghosts.webp"
        },
        {
            name: "408 Request Timeout - Physics Game 🎮",
            link: "https://codepen.io/Yasio/details/mzdNYV",
            img: "https://yasio.dev/gallery/webp/klepsydra.webp"
        },
    ].map(e => {
        return <a
            className="my-1 hover:text-violet-600 w-10/12 md:w-5/12 relative"
            href={e.link}
            key={e.name}
            target="_blank"

        >
            {e.name}
        </a>
    })
    return (
        <div className={`flex w-full  overflow-hidden  bg-[#0e0c16] `} >
            <div className="w-2/12 md:w-3/12 ">
            </div>
            <div className="flex-1 pl-5 pt-9 relative">
                <div
                    className={`absolute my-shadow bg-violet-600 h-full www left-0 top-9 -translate-y-[36px]`}
                ></div>

                <div className="w-10/12 pb-10">
                    <h3 className="text-[#605c62] text-2xl ">
                        Codepen
                    </h3>
                    <div className="flex flex-wrap mt-5 ">
                        {codepen}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MoreProjct