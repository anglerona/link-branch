import Header from "@/components/Header";


export default function Home() {
  return (
    <main>
      <section className="pt-24">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your single link <br/>to everything
          </h1>
          <h2 className="text-xl mt-6 text-gray-500">
            Share your socials, portfolios, contact info, and more
          </h2>
        </div>
        <form className="inline-flex items-center shadow-lg shadow-gray-700/2">
          <span className="bg-white pl-4 py-4 rounded-s">linkbranch.to/</span>
          <input type="text" placeholder="username" className="py-4 outline-none"/>
          <button type="submit" className="bg-teal-600 text-white px-6 py-4 rounded-e">
            Join for Free
          </button>
        </form>
      </section>
    </main>
  );
}
