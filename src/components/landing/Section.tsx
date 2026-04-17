import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image, price, features, isGazebo }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      {isGazebo && image && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </motion.div>
      )}

      <div className="relative z-10 max-w-xl">
        {subtitle && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}

        {price && (
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#FF4D00] text-2xl font-bold">{price}</span>
          </motion.div>
        )}

        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mt-6 text-neutral-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}

        {features && features.length > 0 && (
          <motion.ul
            className="mt-6 space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-neutral-300">
                <Icon name="Check" size={18} className="text-[#FF4D00] shrink-0" />
                {feat}
              </li>
            ))}
          </motion.ul>
        )}

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 md:mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
