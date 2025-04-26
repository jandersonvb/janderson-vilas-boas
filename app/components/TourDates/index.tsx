export type Show = { date: string; city: string; venue: string; link?: string }

const shows: Show[] = [
  { date: "2025-04-24", city: "Itajubá/MG", venue: "Deck", link: "https://www.instagram.com/deckonlybrasil/" },
  { date: "2025-04-25", city: "Itajubá/MG", venue: "Cana Limão", link: "https://www.instagram.com/cana.limao/" },
  { date: "2025-04-26", city: "Itajubá/MG", venue: "Jyba", link: "https://www.instagram.com/jybabeergarden/" },
].map(show => ({
  ...show,
  link: show.link ? `${show.link}?target=_blank` : undefined,
}));

export default function TourDates() {
  return (
    <section id="agenda" className="py-20 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Próximos Shows</h2>
        <div className="space-y-6">
          {shows.map((s) => (
            <div key={s.date} className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 text-center md:text-left">
              <div>
                <p className="font-semibold">{new Date(`${s.date}T00:00:00`).toLocaleDateString("pt-BR", { day: '2-digit', month: 'long' })}</p>
                <p>{s.city} &middot; {s.venue}</p>
              </div>
              <a href={s.link} target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-sm">
                Ingressos
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}