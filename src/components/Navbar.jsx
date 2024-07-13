import { GiHamburgerMenu } from "react-icons/gi";
import { motion, spring } from 'framer-motion';


const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full text-white px-2 md:px-[2rem] lg:px-[3rem] xl:px-[5rem] z-20">
      <div className="flex justify-between items-center cursor-pointer">
        {/* for image */}
        <motion.div  initial={{ opacity: 0, y: -100 }}
            transition={{
              type: spring,
              stiffness: 100,
              damping: 10,
              delay: 0.7,
            }}
            animate={{ opacity: 1, y: 0 }} >
          <img
            height="auto"
            width={100}
            className="max-w-full w-[50px] md:w-[100px] h-auto"
            src="https://i.postimg.cc/RFqXxCDb/logo-coffee.png"
            alt="logo"
          />
        </motion.div>
        {/* for hambar */}
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{
          type: spring,
          stiffness: 100,
          damping: 10,
          delay: 0.7,
        }}
        animate={{ opacity: 1, y: 0 }} 
        >
        <GiHamburgerMenu className="text-black text-2xl " />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
