import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "../../components";
import { useStateContext } from "../../context/contextApi";

const Sidebar = () => {
  const { setToogle } = useStateContext();
  return (
    <motion.div whileInView={{ x: [-300, 0] }} transition={{ duration: 0.7, ease: "easeOut" }} className="fixed h-screen z-10 bg-white/90 dark:border-white/5 dark:bg-dark/90 border-r w-full md:w-96">
      <div className="flex flex-col mt-4 ml-10 justify-around items-start flex-wrap">
        <SearchBar />
        <motion.div className="flex flex-col justify-around mt-8 space-y-4 items-center">
          {["manga", "support", "contact"].map((link) => (
            <Link to={`/${link}`} key={link} className="" onClick={() => setToogle(false)}>
              <motion.p whileHover={{ opacity: [1, 0], y: [0, 300] }} whileInView={{ opacity: [0, 1] }} transition={{ delay: 0.7, duration: 0.4 }} className="capitalize transition duration-700 delay-150 hover:text-sky-500 text-lg">
                {link}
              </motion.p>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
