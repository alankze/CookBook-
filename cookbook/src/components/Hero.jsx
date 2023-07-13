//import { createClient } from 'contentful';
import { client } from "../contenful";
import { useEffect, useState } from "react";

const Hero = () => {
  const [hero, setHeroSection] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "kitchenCarousel" })
      .then((response) => setHeroSection(response.items))
      .catch(console.error);
  }, []);

  //console.log(hero);
  return (
    <>
      {hero &&
        hero.map((item) => (
          <div
            className="flex w-full justify-center min-h-[45rem]  items-center pl-10rem"
            key={item.sys.id}
          >
            <div className="text-center w-2/6 m-4">
              <h2 className="font-bold text-xl py-2 ">{item.fields.title}</h2>
              <p>{item.fields.description}</p>
            </div>
            <div className="px-4 m-4">
              <img
                className="absolute inset-0 z-[-1] w-full h-[42rem] top-20"
                src={item.fields.image.fields.file.url}
                alt={item.fields.title}
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default Hero;
