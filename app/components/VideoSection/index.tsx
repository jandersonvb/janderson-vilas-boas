export default function VideoSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Novo Clipe</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/watch?v=rafODbvGc5U"
            title="Clipe"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
