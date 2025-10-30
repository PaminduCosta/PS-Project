"use client";

import Link from "next/link";
import Image from "next/image";

export type BentoItem = {
  slug: string;
  title: string;
  summary?: string;
  image: string;
  ariaLabel?: string;
};

export default function ChaptersGrid({ items }: { items: BentoItem[] }) {
  // show ALL items (no slice)
  const data = items;

  // center the last row only when it has 3 items (e.g., 11 total)
  const needsCentering = data.length % 4 === 3;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-0 pb-4">
      {/* Centered heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-6 pt-0 pb-0 mt-1">
        Chapters
      </h2>

      {/* 8-col grid; each card spans 2 cols; optionally center the last row */}
      <div className="grid grid-cols-8 gap-4">
        {data.map((item, idx) => {
          const centerLastRow =
            needsCentering && idx === data.length - 3 ? "col-start-2" : "";
          return (
            <div key={item.slug} className={`col-span-2 ${centerLastRow}`}>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card({ item }: { item: BentoItem }) {
  const { slug, title, summary, image, ariaLabel } = item;

  return (
    <Link
      href={`/lessons/${slug}`}
      aria-label={ariaLabel ?? `Open lesson: ${title}`}
      className={[
        "group relative block w-full h-[150px]",
        "rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl",
        "border border-white/10 shadow-[0_8px_30px_rgba(2,12,27,0.08)]",
        "transition-transform hover:scale-[1.01] focus:outline-none",
        "focus-visible:ring-2 focus-visible:ring-white/60",
      ].join(" ")}
    >
      {/* Image: blur + dim on hover for better text legibility */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-300 ease-out
                   group-hover:blur-md group-hover:brightness-75 group-hover:scale-[1.02]"
        sizes="25vw"
        priority={false}
      />

      {/* Hover veil */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0
                   opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Text reveal */}
      <div className="pointer-events-none absolute inset-0 flex items-end p-3">
        <div className="translate-y-3 opacity-0 transition-all duration-300
                        group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          {summary && (
            <p className="mt-0.5 text-[11px] text-white/80 line-clamp-2">{summary}</p>
          )}
          <span className="mt-1 block text-[10px] uppercase tracking-wider text-white/70">
            Read lesson →
          </span>
        </div>
      </div>
    </Link>
  );
}



