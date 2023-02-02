import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoreeal.png";
import { useStateContext } from "../../context/contextApi";
import { links } from "../../utils/DummyData";

const Sidebar = () => {
  const { setToogle } = useStateContext();
  return (
    <motion.div whileInView={{ x: [-300, 0] }} transition={{ duration: 0.7, ease: "easeOut" }} className="fixed h-screen z-20 bg-white/90 dark:border-white/5 dark:bg-dark/90 border-r w-full md:w-96">
      <div className="flex flex-col mt-4 ml-10 justify-around items-start flex-wrap">
        <Link to="/" onClick={() => setLogin(false)}>
          <div className="flex items-center hover:animate-bounce lg:text-xl tracking-tight font-[900] bg-clip-text text-transparent text-base bg-gradient-to-r from-sky-400 to-blue-500 uppercase">
            <img src={Logo} alt="logo Anime" className="w-10 h-8 sm:h-10 sm:w-12 mr-1" />
            <span className="hidden sm:block"> Anime</span>
          </div>
        </Link>
        <motion.div whileInView={{ opacity: [0, 1], x: [-100, 0] }} transition={{ delay: 0.4, duration: 1 }} className="flex flex-col justify-around mt-8 space-y-4 items-center">
          {links.map((link) => (
            <Link to={`/${link.name}`} key={link.name} onClick={() => setToogle(false)} className="flex items-center p-2  transition duration-700 delay-150 hover:text-sky-500 space-x-2">
              <span className="text-lg">{link.icon}</span>
              <p className="capitalize text-lg">{link.name}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
