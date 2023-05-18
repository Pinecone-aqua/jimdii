export default function Partners() {
  return (
    <section className="bg-white text-black flex flex-col lg:flex-row justify-center items-center py-40 gap-10">
      <div className="border-b-2 lg:border-r-2 border-black h-[100px]">
        <p className="text-6xl font-bold px-10">Partners</p>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        <div className="partner">
          <p>Naadam</p>
        </div>
        <div className="partner">
          <p>Gold&apos;s Gym</p>
        </div>
        <div className="partner">
          <p>Olympus</p>
        </div>
        <div className="partner">
          <p>Uran Gan</p>
        </div>
      </div>
    </section>
  );
}
