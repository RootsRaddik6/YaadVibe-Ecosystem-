export default function Home() {
  return (
    <main
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/jamaica-beach.jpg')",
      }}
    >
      <div className="bg-black/40 p-6 rounded-xl text-center backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          YaadVibe Ecosystem
        </h1>
        <p className="text-lg mb-6 drop-shadow-lg">
          Experience Jamaica Like Never Before
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            disabled
            className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold shadow-md cursor-not-allowed"
          >
            Launch DApp (Coming Soon)
          </button>

          <a href="#" className="px-6 py-3 rounded-lg bg-white text-black font-semibold shadow-md">
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
