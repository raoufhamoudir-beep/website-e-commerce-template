import { useEffect, useState } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";


const Header = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPos < 500) {
            return
        }
        if (scrollPos === prevScrollPos) {
            return
        }
        if (scrollPos > prevScrollPos) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        setPrevScrollPos(scrollPos);
    }, [scrollPos, prevScrollPos]);

    const navlinks = ['start', 'work', 'lab', 'about', 'contact']
    let list = navlinks.map(e => {
        return (
            <li key={e} className='text-gray-400 mx-3 hover:scale-110 hover:text-white capitalize'>
                <a href={`#${e}`}>{e} <span className='text-gray-700'>/&gt;</span>
                </a>
            </li>
        )
    })
    let listBars = navlinks.map(e => {
        return (
            <li key={e} className='text-gray-400 text-2xl mb-4 font-semibold mx-3 hover:scale-110 hover:text-white capitalize'>
                <a href={`#${e}`}>{e} <span className='text-gray-700'>/&gt;</span>
                </a>
            </li>
        )
    })
    const [showLink, setShowLink] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log(e);
        })
    }, [])
    if (!visible) {
        return
    }
    return (
        <nav className='backdrop-blur-sm fixed w-full py-3 px-4 flex text-white items-center justify-between z-20 top-0 left-0 '>
            <motion.h1
                className=' hover:scale-110 text-3xl cursor-pointer w-fit font-medium z-20'
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 500, damping: 20 }}
            // whileHover={{ scale: 1.1 }}
            >
                <span className='text-violet-600 text-2xl my-text-shadow'>&lt;</span> Raouf <span className='text-violet-600 text-2xl my-text-shadow'>/&gt;</span>
            </motion.h1>
            <motion.ul
                className='hidden md:flex list-none text-lg  lg:text-xl font-bold'
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                {list}
            </motion.ul>
            <button className="md:hidden flex w-fit p-1 px-3 border border-gray-800 bars rounded-md cursor-pointer hover:border-gray-700 z-20"
                onClick={() => {
                    setShowLink(p => !p)
                }}
                onBlur={() => {
                    setShowLink(false)
                }}
            >
                <HiMiniBars3 color='#aaa' size={28} />
            </button>
            <AnimatePresence>
                {showLink && <motion.ul
                    initial={{ top: -40, opacity: 0 }}
                    animate={{ top: 60, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ top: -40, opacity: 0 }}
                    className='fixed barsshado md:hidden flex flex-col top-12 left-0 w-full z-10 items-center justify-center min-nav'>
                    {listBars}
                </motion.ul>
                }
            </AnimatePresence>
        </nav>
    )
}

export default Header