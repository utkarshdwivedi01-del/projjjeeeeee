import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-brand-orange py-20 md:py-32 px-6 md:px-12 text-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 md:mb-20"
        >
          <motion.a
            href="tel:+919451810167"
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black hover:opacity-50 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact- +91 9451810167
          </motion.a>
          <motion.a
            href="mailto:utkarshdwivedi14405@gmail.com"
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black hover:opacity-50 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email- utkarshdwivedi14405@gmail.com
          </motion.a>
        </motion.div>

        {/* Quote */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair italic text-3xl md:text-5xl lg:text-6xl text-center max-w-4xl leading-tight mb-20 md:mb-32 uppercase"
        >
          "Let's turn your ideas into reality."
        </motion.h3>

        {/* Massive Name */}
        <div className="w-full select-none overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-black massive-text text-center uppercase whitespace-nowrap"
          >
            UTKARSH
          </motion.h2>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-20 w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-black/10 gap-6"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] font-black">
            Utkarsh Dwivedi &copy; 2026
          </p>
          <p className="text-[10px] uppercase tracking-[0.5em] font-black">
            Available for Projects
          </p>
          <p className="text-[10px] uppercase tracking-[0.5em] font-black">
            Based in Kanpur
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
