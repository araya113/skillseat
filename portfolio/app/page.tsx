export default function Home() {
  return (
    <header className="bg-gray-800 p-6 text-white shadow-md flex justify-between items-center">
      <h1 className="text-4xl font-bold tracking-wide leading-tight">
        Portfolio
      </h1>
      <div className="text-right">
        <p className="text-lg font-light tracking-wide">
          about me
        </p>
        <p className="text-sm font-light tracking-wide">
          works
        </p>
        <p className="text-sm font-light tracking-wide">
          contact
        </p>
      </div>
    </header>
  );
}
