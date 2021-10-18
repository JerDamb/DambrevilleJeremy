import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function Gallery({ items, setIndex }) {
  return (
    <ul className="gallery-container">
      {items.map((color, i) => (
        <motion.li
          className="gallery-item"
          key={color}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: color }}
          layoutId={color}
        />
      ))}
    </ul>
  );
}

function SingleImage({ color, onClick }) {
  return (
    <div className="single-image-container" onClick={onClick}>
      <motion.div
        layoutId={color}
        className="single-image"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default function App() {
  const [index, setIndex] = useState(false);

  return (
    <AnimateSharedLayout>
      <Gallery items={colors} setIndex={setIndex} />
      <AnimatePresence>
        {index !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="overlay"
            onClick={() => setIndex(false)}
          />
        )}

        {index !== false && (
          <SingleImage
            key="image"
            index={index}
            color={colors[index]}
            setIndex={setIndex}
            onClick={() => setIndex(false)}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

const numColors = 4 * 4;
const makeColor = hue => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from(Array(numColors)).map((_, i) =>
  makeColor(Math.round((360 / numColors) * i))
);
