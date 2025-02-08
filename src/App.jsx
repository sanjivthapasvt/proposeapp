import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center p-4">
      {!yesClicked ? (
        <>
          <img
            src="https://media.tenor.com/pmB6eX_aMQ4AAAAj/bubu-dudu-sseeyall.gif"
            alt="Proposal GIF"
            className="w-64 mb-6 rounded-lg shadow-lg"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6">
            Will you be my Valentine? 💖
          </h1>
          <div className="flex gap-6">

            <motion.button
              className="px-6 py-3 bg-green-500 text-white rounded-full text-lg cursor-pointer font-semibold hover:bg-green-600 transition"
              onClick={() => setYesClicked(true)}
            >
              Yes ❤️
            </motion.button>


            <motion.button
              className="px-6 py-3 bg-red-500 text-white rounded-full text-lg font-semibold"
              style={{
                position: "relative",
                left: noPosition.x,
                top: noPosition.y,
              }}
              onMouseEnter={moveNoButton}
            >
              No 💔
            </motion.button>
          </div>
        </>
      ) : (
        <LoveAnimation />
      )}
    </div>
  );
}

function LoveAnimation() {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6">
        Aww! 💖
      </h1>
      <p className="text-lg text-gray-700 mb-4">I love you! ❤️🥰💞💫</p>

      <img
        src="https://media1.tenor.com/m/ZnF1RB29Cm0AAAAC/deifd.gif"
        alt="Happy Couple GIF"
        className="w-64 mb-6 rounded-lg shadow-lg"
      />


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "110%", opacity: 1 }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
}
