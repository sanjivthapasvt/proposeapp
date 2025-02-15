import { useState } from "react";
import { motion } from "framer-motion";
import gif1 from "./assets/love-exited.gif";
import gif2 from "./assets/img2.gif";
export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noTextIndex, setNoTextIndex] = useState(0);
  const [moveUp, setMoveUp] = useState(false);

  const noTexts = [
    "No💔",
    "Are you really sure? 😢",
    "Think again... 💔",
    "Please reconsider 🥺",
    "If you say no I will be really sad..🥹",
    "I will be very sad...",
  ];

  const handleNoClick = () => {
    if (noTextIndex < noTexts.length - 1) {
      setYesSize((prev) => prev + 3);
      setNoTextIndex((prev) => prev + 1);
      setMoveUp((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center p-4">
      {!yesClicked ? (
        <>
          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6">
            Will you be my Valentine? 💖
          </h1>
          <img src={gif1} alt="Proposal GIF" className="w-64 mb-6 rounded-lg" />
          <div className="relative w-full max-w-md h-32 flex items-center justify-center gap-4">
            <motion.button
              className="px-6 py-3 bg-green-500 text-white text-lg cursor-pointer font-semibold hover:bg-green-600 transition rounded-md"
              onClick={() => setYesClicked(true)}
              style={{
                transform: `scale(${yesSize})`,
                transition: "all 0.2s ease",
                zIndex: 10,
              }}
            >
              Yes ❤️
            </motion.button>

            {noTextIndex < noTexts.length - 1 && (
              <motion.button
                className="px-5 py-3 bg-red-600 cursor-pointer text-white text-lg font-semibold transition rounded-md"
                style={{
                  transform: moveUp
                    ? `translateY(-${yesSize * 40}px)`
                    : `translateX(${yesSize * 40}px)`,
                  transition: "all 0.2s ease",
                  opacity: noTextIndex === noTexts.length - 2 ? 0.5 : 1,
                  zIndex: 20,
                }}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: noTextIndex === noTexts.length - 1 ? 0 : 1,
                }}
                transition={{ duration: 0.5 }}
                onClick={handleNoClick}
              >
                {noTexts[noTextIndex]}
              </motion.button>
            )}
          </div>
        </>
      ) : (
        <LoveAnimation />
      )}
    </div>
  );
}
function LoveAnimation() {
  const hearts = ["❤️", "💖", "💗", "💓"];

  return (
    <div className="text-center relative h-screen w-full">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 pt-8">
        Knew you would say yes! SEE YOU ON <br /> VALENTINES!❤️
      </h1>

      <img
        src={gif2}
        alt="Happy Couple GIF"
        className="w-64 mb-6 rounded-lg mx-auto"
      />

      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              color: `rgba(255, ${Math.random() * 100 + 20}, ${
                Math.random() * 100 + 20
              }, ${Math.random() * 0.5 + 0.5})`,
            }}
            initial={{
              y: -50,
              x: 0,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: "100vh",
              x: Math.sin(Math.random() * Math.PI * 2) * 50,
              opacity: [0, 1, 1, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          >
            {hearts[Math.floor(Math.random() * hearts.length)]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
