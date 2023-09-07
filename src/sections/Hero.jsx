import Button from '../components/Button';
import arrowRight from '../assets/icons/arrow-right.svg';
import { shoes, statistics } from '../constants/index.js';
import bigShoe1 from '../assets/images/big-shoe1.png';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex justify-center xl:flex-row flex-col min-h-screen gap-10 max-container border-2 border-red-500 p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="text-8xl mt-10 font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Nike</span>{' '}
          Collection
        </h1>
        <p className="text-lg mb-14 text-slate-gray leading-8 mt-6 font-montserrat sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
