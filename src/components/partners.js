import Popup from "./animations/popup";
import Container from "./container";

export default function Partners() {
  return (
    <div className="relative min-h-screen md:pb-20 md:pt-10 flex">
      <div className="absolute inset-0">
        <img
          src="/images/circlebgshape.png"
          alt="shape"
          className="object-cover md:object-fill"
        />
      </div>
      <Popup className="w-16 md:w-20 top-32 md:left-10 z-10">
        <img
          src="/images/redpyramidthree.png"
          alt="shape"
        />
      </Popup>
      <Popup className="w-32 left-0 md:left-10 bottom-1/4 z-10 hidden md:block">
        <img
          src="/images/shapesix.png"
          alt="shape"
        />
      </Popup>
      <Popup className="w-10 right-0 md:right-10 top-1/4 z-10">
        <img
          src="/images/blurpyramid.png"
          alt="shape"
        />
      </Popup>
      <Popup className="w-32 right-0 md:right-10 bottom-1/4 z-10 hidden md:block">
        <img
          src="/images/shapeseven.png"
          alt="shape"
        />
      </Popup>
      <Container className="max-w-[1200px] z-20 relative">
        <div className="max-w-xs sm:max-w-sm md:max-w-lg w-full m-auto relative group">
          <img
            src="/images/roundedborders.png"
            alt="circle"
            className="animate-spin-slow group-hover:animate-none"
          />
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute left-6 top-6 sm:left-12 md:left-10 md:top-14 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnerone.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute left-1/2 top-3 md:left-1/2 md:top-6 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnertwo.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute right-0 top-14 sm:right-6 md:right-3 md:top-24 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnerthree.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute left-1/4 top-1/4 sm:left-28 md:left-36 md:top-32 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnerfour.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute left-2 top-1/2 sm:left-3 md:left-2 md:top-2/4 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnerfive.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute right-16 top-1/3 sm:right-20 md:right-28 md:top-1/3 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnersix.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute bottom-[94px] left-1/4 sm:bottom-28 md:bottom-36 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnerseven.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute bottom-3 left-10 sm:left-16 md:bottom-8 md:left-16 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnerfour.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute right-24 bottom-3 sm:bottom-7 sm:right-28 md:bottom-6 md:right-40 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnerfive.png"
              alt="partner"
            />
          </button>
          <button className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute bottom-1/4 right-[52px] sm:right-[72px] md:right-24 hover:scale-110 transition-all duration-300">
            <img
              src="/images/partnereight.png"
              alt="partner"
            />
          </button>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center">
          <h4 className="text-xl md:text-3xl lg:text-4xl font-black">parteners</h4>
          <p className="text-sm md:text-2xl lg:text-3xl font-black">ama-signal</p>
        </div>
      </Container>
    </div>
  );
}
