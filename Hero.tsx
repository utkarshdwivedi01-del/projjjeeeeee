import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col overflow-hidden bg-brand-black"
    >
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'top' }}
          className="h-[55%] w-full bg-brand-orange"
        />
        <div className="h-[45%] w-full bg-brand-black" />
      </div>

      {/* Big Background Text: CREATIVE */}
      <div className="absolute inset-0 flex items-center justify-center z-10 select-none">
        <motion.h1
          initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair font-black text-white massive-text text-center uppercase px-4"
        >
          CREATIVE
        </motion.h1>
      </div>

      {/* Center Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img
            src="/face.png"
            alt="Utkarsh Dwivedi"
            className="w-[320px] h-auto md:w-[500px] lg:w-[550px] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Hero Details & Floating Text */}
      <div className="absolute inset-0 z-30 pointer-events-none px-6 md:px-12">
        {/* Floating Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[20%] left-6 md:left-24 max-w-[150px] md:max-w-[200px]"
        >
          <p className="font-playfair italic text-sm md:text-lg leading-tight text-white drop-shadow-md">
            Designing with resourcefulness.
          </p>
        </motion.div>

        {/* Floating Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[20%] right-6 md:right-24 text-right"
        >
          <p className="font-playfair italic text-sm md:text-lg leading-tight text-white drop-shadow-md">
            Kanpur, India.
          </p>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[8%] left-6 md:left-12 max-w-[320px] md:max-w-[500px]"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-brand-black/80">
            Vision
          </h2>
          <p className="text-sm md:text-base font-light text-white/90 leading-relaxed tracking-wide">
            To create work that lingers in the mind long after the screen is turned off.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
