import WebCart from "./WebCart";

const WebSection = () => {
    const website = [
        {
            titel: "national geographic learning",
            img: "https://yasio.dev/assets/img/nglearning_small.a44a1c8.jpg"
        },
        {
            titel: "hotel z rowerem",
            img: "https://yasio.dev/assets/img/hzr_small.e11260b.jpg"
        },
        {
            titel: "decablog",
            img: "https://yasio.dev/assets/img/decathlon_small.d98fded.jpg"
        },
        {
            titel: "data driven mailing",
            img: "https://yasio.dev/assets/img/datadrivenmailing_small.c1a15e8.jpg"
        }
        ,
        {
            titel: "royalcars",
            img: "https://yasio.dev/assets/img/royal2_small.7183fc6.jpg"
        }
        ,
        {
            titel: "synthos raport roczny",
            img: "https://yasio.dev/assets/img/synthos_small.45d39b5.jpg"
        }
        ,
        {
            titel: "sare",
            img: "https://yasio.dev/assets/img/sare_small.c4ec002.jpg"
        }

        ,

        {
            titel: "restauracje",
            img: "https://yasio.dev/assets/img/restauracjewtoruniu_small.744dbdf.jpg"
        },
        {
            titel: "europacentralna",
            img: "https://yasio.dev/assets/img/europacentralna_small.332e05f.jpg"
        },
        {
            titel: "strategie marketingowe",
            img: "https://yasio.dev/assets/img/strategiemarketingowe_small.64844df.jpg"
        },

        {
            titel: "biosady",
            img: "https://yasio.dev/assets/img/biosady_small.ba91d00.jpg"
        }
        ,
        {
            titel: "dom-styr",
            img: "https://yasio.dev/assets/img/domstyr_small.34a8d25.jpg"
        }
        ,
        {
            titel: "mail-cat-cc",
            img: "https://yasio.dev/assets/img/mailcat_small.ac323d6.jpg"
        }
    ]
    console.log(website.length);
    let mywebsite = website.map((e, i) => {
        return <WebCart web={e} key={i} number={i} />

    })

    return (
        <div className="  flex w-full min-h-screen  overflow-hidden web-bg " >
            <div className="w-2/12 md:w-3/12 ">
            </div>
            <div className="flex-1 pl-5 pt-[150px] md:pt-[140px]  relative">
                <div
                    className="absolute my-shadow bg-violet-600 h-full www left-0 top-0"
                ></div>
                <section className="show-after min-h-[2500px] relative flex-1">
                    {mywebsite}
                </section>
            </div>

        </div>
    )
}

export default WebSection