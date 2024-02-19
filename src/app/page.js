import Header from "@/components/Header";


export default function Home() {
  return (
    <main>
      <Header />
      <section className="pt-24 p-6 max-w-4xl mx-auto">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your single link <br/>to everything
          </h1>
          <h2 className="text-xl mt-6 text-gray-500">
            Share your socials, portfolios, contact info, and more
          </h2>
        </div>
        <form className="inline-flex items-center shadow-lg shadow-gray-700/2">
          <span className="bg-white pl-4 py-4">linkbranch.to/</span>
          <input type="text" placeholder="username" className="py-4"/>
          <button type="submit" className="bg-teal-600 text-white px-6 py-4">
            Join for Free
          </button>
        </form>
      </section>
    </main>
  );
}
