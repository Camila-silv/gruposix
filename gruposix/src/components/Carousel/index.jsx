import { useRef } from "react";

export default function Carousel({children}) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <div className="w-full">
      <div className="flex gap-4 justify-center ">
        <button onClick={handleLeftClick}>
          <i class="fa-solid fa-arrow-left text-2xl p-6 border-2 rounded-full w-[40px] h-[40px] flex justify-center items-center"></i>
        </button>
        <button onClick={handleRightClick}>
          <i class="fa-solid fa-arrow-right text-2xl p-6 border-2 rounded-full w-[40px] h-[40px] flex justify-center items-center"></i>
        </button>
      </div>
      <div ref={carousel} className="flex overflow-hidden scroll-smooth py-12">
        {children}
      </div>
    </div>
  );
}
