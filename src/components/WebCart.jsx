import { useEffect, useRef } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion'

const WebCart = ({ web, number }) => {
    const boxRef = useRef(null);
    let position = () => {
        if ((number + 1) % 3 === 2 && (number + 1) < 3) {
            return "md:absolute md:top-[180px] md:-left-10"
        } else if ((number + 1) % 3 === 2 && (number + 1) < 6) {
            return "md:absolute md:top-[760px] md:-left-10"
        } else if ((number + 1) % 3 === 2 && (number + 1) < 9) {
            return "md:absolute md:top-[1360px] md:-left-10"
        } else if ((number + 1) % 3 === 2 && (number + 1) < 12) {
            return "md:absolute md:top-[1940px] md:-left-10"
        } else if ((number + 1) === 13) {
            return "md:absolute md:left-[-30%] md:top-[2200px]"
        }

    }
    useEffect(() => {
        const el = boxRef.current;

        const handleMove = (e) => {
            const height = el.clientHeight;
            const width = el.clientWidth;
            const xVal = e.layerX;
            const yVal = e.layerY;
            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);
            const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            el.style.transform = transformString;
        };

        const handleMouseOut = () => {
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        };

        const handleMouseDown = () => {
            el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
        };

        const handleMouseUp = () => {
            el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseout', handleMouseOut);
        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mouseup', handleMouseUp);

        // Cleanup event listeners on component unmount
        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseout', handleMouseOut);
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    let a = () => {
        return position() ? -200 : 200
    }
    return (
        <motion.div
            initial={{ x: a(), opacity: 0, rotateX: 180 }}
            transition={{ delay: 0.3, duration: 1 }}
            whileInView={{ x: 0, opacity: 1, rotateX: 0 }}
            ref={boxRef}
            className={`w-full my-12 flex justify-end px-10 py-10 relative  hover:z-50 md:w-[60%] ${(number + 1) % 3 === 0 && "md:ml-auto"} md:my-0 z-[100]  ${(number + 1) % 3 === 1 && (number + 1) != 13 && "md:absolute md:left-[-30%]"} ${position()}  md:my-0 `}>
            <div className={`absolute left-0 bottom-10 w-full `}>
                <h1 className='font-[400] text-[30px] max-w-[50%]'>{web.titel}</h1>
                <span className='h-1 w-[50%] bg-white flex'>
                </span>
                <span className='flex'>0{number}</span>
                <span className='flex my-3'><FaArrowRightLong className='text-white' /></span>
            </div>
            <div className={`max-w-[80%]`}>
                <img
                    className='ml-auto'
                    src={web.img} />
            </div>
        </motion.div>
    )
}

export default WebCart