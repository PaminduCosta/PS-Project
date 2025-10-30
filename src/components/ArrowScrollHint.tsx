"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";


export default function ArrowScrollHint() {
return (
<motion.div
aria-hidden
initial={{ opacity: 0, y: -4 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
className="absolute bottom-6 left-1/2 -translate-x-1/2"
>
<ChevronDown className="h-8 w-8 text-white/70" />
</motion.div>
);
}