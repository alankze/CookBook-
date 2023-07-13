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
            className="flex flex-row justify-center items-center p-30 min-h-[45rem]"
            key={item.sys.id}
          >
            <div className="text-center px-7 m-4">
              <h2 className="font-bold text-xl py-2">{item.fields.title}</h2>
              <p>{item.fields.description}</p>
            </div>
            <div className="px-4 m-4" style={{ width: "100%" }}>
              <img
                className="absolute inset-0 z-[-1] w-full h-[40rem] top-20"
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
