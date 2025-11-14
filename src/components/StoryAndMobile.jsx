/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 13/11/2025 - 13:02:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Story + Mobile App (reduced height, buttons overlap phone, buttons rounded,
 * phone contained and not leaking)
 */
export default function StoryAndMobile() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 mt-20 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* LEFT — STORY */}
      <div className="relative rounded-xl overflow-hidden h-[420px]">
        <img
          src="/images/Story.webp"
          className="w-full h-full object-cover"
          alt="Our story"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10">
          <h2 className="text-white text-4xl font-bold leading-tight">
            Get To Know Our <br /> Story
          </h2>

          <button className="mt-6 bg-[#0047ba] text-white px-8 py-3 rounded-lg text-lg font-semibold w-fit">
            Learn More
          </button>
        </div>
      </div>

      {/* RIGHT — MOBILE APP */}
      <div className="relative rounded-xl bg-[#f4e7e7] p-8 flex flex-col overflow-hidden">
        <div className="z-20">
          <h2 className="text-3xl font-bold">
            <span className="text-[#be3a34]">Our </span>
            <span className="text-[#0047ba]">Mobile App!</span>
          </h2>

          <p className="text-gray-700 mt-3 text-base leading-relaxed max-w-[60ch]">
            Search and book flights faster and more efficiently with our mobile app.
          </p>

          {/* Store Buttons — rounded, with shadow, slightly overlapping preview */}
          <div className="flex gap-4 mt-6 items-center">
            <img
              src="/images/Apay.png"
              alt="App Store"
              className="h-12 cursor-pointer rounded-lg shadow-md z-30"
            />
            <img
              src="/images/Gpay.png"
              alt="Google Play"
              className="h-12 cursor-pointer rounded-lg shadow-md z-30"
            />
          </div>
        </div>

        {/* App preview image — contained on the right-bottom, won't leak */}
        <div className="absolute right-4 bottom-[-10px] md:bottom-0 md:-right-23 w-[96%] max-w-[980px] pointer-events-none">
          <img
            src="https://www.f6s.com/content-resource/media/4067519_b6f093b11a22f2d7abdfa05eb66a3da206573821.png"
            alt="App preview"
            className="w-full h-auto object-contain drop-shadow-xl"
            style={{ maxHeight: "340px" }}
          />
        </div>
      </div>
    </div>
  );
}
