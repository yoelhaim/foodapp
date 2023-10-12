'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';

export function Cards() {
  return (
    <div className="py-3">
      <div
        className="flex flex-col gap-4  relative
        bg-cover bg-center bg-no-repeat  h-[350px] rounded-3xl
        w-[270px]
        "
        style={{ backgroundImage: 'url(/img/pizza.jpg)' }}
      >
        <div className="text-main absolute left-5 bottom-5 flex flex-col gap-3  text-left">
          <h4 className="text-2xl font-semibold">Easy To Order</h4>
          <p className="text-2xl font-semibold ">
            <span className=" text-yellow">$</span> 75
          </p>

          <p className="text-sm">order now </p>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);

  function more() {
    ref.current?.scrollBy({ left: 290, behavior: 'smooth' });
  }

  function less() {
    ref.current?.scrollBy({ left: -290, behavior: 'smooth' });
  }
  return (
    <div id='menu'>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div>
            {' '}
            <h2 className="text-sm text-primary">OUR MENU</h2>
            <h3 className="text-3xl w-full md:w-96 ">
              Menu That Always Makes You Fall In Love
            </h3>
          </div>
          <div className="flex gap-4">
            <button
              onClick={less}
              className=" bg-[#e0e0e0] text-primary flex justify-center  items-center p-3 rounded-full
        h-10 w-10  "
            >
             <BiSolidChevronLeft/>
            </button>
            <button
              onClick={more}
              className=" bg-primary flex justify-center  items-center p-3 rounded-full
        h-10 w-10  text-main"
            >
            <BiSolidChevronRight/>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 w-full py-4">
        <div className="w-full md:w-2/6 pr-16 flex flex-col gap-5 h-[350px] overflow-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex border items-center gap-4 bg-primary text-main px-5 py-3 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out   capitalize hover:bg-main hover:border-primary hover:text-primary"
            >
              <Image src="/img/ban.png" width={20} height={20} alt="food" />
              <p className="capitalize">pizza</p>
            </div>
          ))}
        </div>

        <div className="w-full  flex overflow-hidden gap-5 scrollbar scrollbar-thumb-red scrollbar-track-yellow"
        
        
        ref={ref}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}
