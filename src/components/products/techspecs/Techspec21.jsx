import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../home/Home.css';
import '../../home/homecomponents/HomeComponent.css';
import './Techspec.css';

const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const Techspec21 = () => {
  const [refTechSpec, inViewTechSpec] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animatedImage = useCallback(
    (src, alt, text) => (
      <motion.div
        className="image-item"
        variants={imageVariants}
        initial="initial"
        animate={inViewTechSpec ? 'animate' : 'initial'}
      >
        <img
          src={src}
          alt={alt}
          className="galleryoverlayimage"
          height="100px"
          width="100px"
        />
        <h3>{text}</h3>
      </motion.div>
    ),
    [inViewTechSpec]
  );

  const images = useMemo(() => {
    return [
      animatedImage("https://d2k5m0tntfs5ke.cloudfront.net/techspec/kilogram.webp", 'Bespokemodels', 'Tare Approx: 2850kg'),
      animatedImage("https://d2k5m0tntfs5ke.cloudfront.net/techspec/chain.webp", 'Ecofriendly', 'ATM: 3500kg'),
      animatedImage("https://d2k5m0tntfs5ke.cloudfront.net/techspec/height.webp", 'Experience', 'Internal Height: 2000mm'),
      animatedImage("https://d2k5m0tntfs5ke.cloudfront.net/techspec/length.webp", 'Ratings', 'External Length: 9150mm'),
      animatedImage("https://d2k5m0tntfs5ke.cloudfront.net/techspec/aim (1).webp", 'Ratings', 'Ball Approx: 220kg'),
      animatedImage("https://d2k5m0tntfs5ke.cloudfront.net/techspec/exheight.webp", 'Ratings', 'External Height: 3200mm'),
    ];
  }, [animatedImage]);

  return (
    <div className="component" ref={refTechSpec}>
      <h1>TECHNICAL SPECS</h1>
      <div className="ourval">{images}</div>
    </div>
  );
};

export default React.memo(Techspec21);
