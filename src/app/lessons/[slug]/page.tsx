// app/lessons/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, lessons } from "@/data/lessons";

// In Next 15 this can stay sync or async; keeping async for consistency.
export async function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ await params
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: `${lesson.title} — Academic Journal`,
    description: lesson.summary,
    openGraph: {
      title: lesson.title,
      description: lesson.summary,
      type: "article",
      images: lesson.image ? [lesson.image] : [],
    },
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ await params
  const lesson = getLesson(slug);
  if (!lesson) return notFound();

  const { title, summary, image, keyTakeaways, reflection, references } = lesson;

  // ✅ Handle base path for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/PS-Project' : '';
  const imageSrc = image ? `${basePath}${image}` : '';

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      <Link href="/#chapters" className="text-white/70 hover:text-white">
        ← Back
      </Link>
      <header className="mt-6 grid grid-cols-1 md:grid-cols-[18rem_1fr] gap-6 items-start">
        <div className="relative h-48 md:h-52 w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          {/* If the remote image 404s, the neutral bg still keeps layout clean */}
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority={false}
            />
          )}
        </div>
        <div>
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="mt-3 text-white/70">{summary}</p>
        </div>
      </header>
      <section className="mt-10 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold">Key Takeaways</h2>
          {keyTakeaways?.length ? (
            <ul className="mt-3 list-disc pl-6 text-white/80 space-y-2">
              {keyTakeaways.map((k) => (
                <li key={k.slice(0, 40)}>{k}</li>
              ))}
            </ul>
          ) : (
            <ul className="mt-3 list-disc pl-6 text-white/80 space-y-2">
              <li>Write 3–5 crisp bullets about what you learned.</li>
              <li>Include a small snippet, diagram, or screenshot.</li>
              <li>State how you applied it in your project.</li>
            </ul>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Reflection</h2>
          <p className="mt-3 text-white/80">
            {reflection ??
              "What surprised you? What was hard? What would you change next time?"}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">References</h2>
          {references?.length ? (
            <ol className="mt-3 list-decimal pl-6 text-white/80 space-y-2">
              {references.map((r) => (
                <li key={r.slice(0, 40)}>{r}</li>
              ))}
            </ol>
          ) : (
            <ol className="mt-3 list-decimal pl-6 text-white/80 space-y-2">
              <li>Course notes and assignments.</li>
              <li>Articles/books/videos you used.</li>
            </ol>
          )}
        </div>
      </section>
    </main>
  );
}

