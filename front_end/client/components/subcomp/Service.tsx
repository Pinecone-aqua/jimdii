export default function Service(): JSX.Element {
  return (
    <div className="relative parallax">
      <video
        autoPlay
        loop
        muted
        playsInline
        // id="pattern"
        className="running"
      >
        <source src="./running.mp4" type="video/mp4" />
      </video>
      <section className="flex flex-col items-center py-10">
        <h2 className="text-3xl text-white">Таны сонирхож буй үйлчилгээ</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          neque, fugiat similique velit reprehenderit explicabo eaque non nulla
          deserunt dolor.
        </p>
        <div className="h-[600px] flex items-center gap-60">
          <div className="relative">
            <span className="text-main text-9xl font-bold">1</span>
            <p className="absolute top-12 left-[-30px] whitespace-nowrap">
              Жиймны мэдээлэл
            </p>
          </div>
          <div className="relative">
            <span className="text-main text-9xl font-bold">2</span>
            <p className="absolute top-12 left-[-45px] whitespace-nowrap">
              Хувийн дасгалжуулагч
            </p>
          </div>
          <div className="relative">
            <span className="text-main text-9xl font-bold">3</span>
            <p className="absolute top-12 left-0 text-center">Гишүүнчлэл</p>
          </div>
        </div>
        <button className="mainButton">Дэлгэрэнгүй</button>
      </section>
    </div>
  );
}
