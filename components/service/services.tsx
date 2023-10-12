import Image from 'next/image';

export default function Services() {
  return (
    <div id='services'>
      <div className="text-center flex flex-col gap-4  w-72 mx-auto justify-center">
        <h2 className="text-sm text-primary">WHAT WE SERVESES</h2>
        <h3 className="text-3xl ">Your Favorite Food Delivery Partner</h3>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-10 justify-center items-center w-full">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <Image src="/img/1.svg" width={100} height={100} alt="food" />
          <h4 className="text-1xl font-semibold">Easy To Order</h4>
          <p className='text-xs px-10'>You only need a few steps in ordering food.</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <Image src="/img/2.svg" width={100} height={100} alt="food" />
          <h4 className="text-1xl font-semibold">Fastest Delivery</h4>
          <p className='text-xs px-10'>Delivery that is always ontime even faster.</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <Image src="/img/3.svg" width={100} height={100} alt="food" />
          <h4 className="text-1xl font-semibold">Best Quality</h4>
          <p className='text-xs px-10'>Not only fast for us quality is also number one.</p>
        </div>
        
      </div>
    </div>
  );
}
