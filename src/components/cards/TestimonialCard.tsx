import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    text: string;
    image: string;
    linkedin?: string;
    company?: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0a1233]/70 to-[#060b22]/90 backdrop-blur-xl shadow-xl hover:shadow-tertiary/20 transition-all duration-500 flex flex-col h-full"
    >
      {/* 🔥 Glow Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_70%)] pointer-events-none" />

      {/* 🖼 Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
        />

        {/* Gradient Overlay (better readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* ✅ LinkedIn Icon ONLY */}
        {testimonial.linkedin && (
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>

      {/* 📄 Content */}
      <div className="p-4 relative z-10 flex-1 flex flex-col">
        {/* Name */}
        <h3 className="text-lg md:text-xl font-bold tracking-tight uppercase text-white group-hover:text-tertiary transition duration-300">
          {testimonial.name}
        </h3>

        {/* Role + Company */}
        <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-3">
          {testimonial.role}{" "}
          <span className="text-tertiary/70">
            @ {testimonial.company || "Apex Circle"}
          </span>
        </p>

        {/* Testimonial Text */}
        <p className="text-slate-300 text-sm italic leading-relaxed line-clamp-3 flex-grow">
          “{testimonial.text}”
        </p>

        {/* Bottom Accent Line */}
        <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-tertiary to-transparent transition-all duration-700" />
      </div>
    </motion.div>
  );
}