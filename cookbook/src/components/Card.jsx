//import introImg from "../assets/hero.jpeg";

import { useState, useEffect } from "react";
import { client } from "../contenful";
import { Link } from "react-router-dom";

const Card = () => {
  const [cardItem, setCardItem] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "recipeCards" })
      .then((response) => setCardItem(response.items))
      .catch(console.error);
  }, []);

  // console.log(cardItem);
  return (
    <div id="recipes" className="flex flex-row justify-center gap-6 p-5 m-10 ">
      {cardItem &&
        cardItem.map((item) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg  w-[30%] bg-cards"
            key={item.sys.id}
          >
            <img
              className="w-full h-[50vh] "
              src={item.fields.image.fields.file.url}
              alt={item.fields.title}
            />
            <div className="px-6 py-4 cards-item ">
              <Link to={`/recipes/${item.sys.id}`}>
                <div className="font-bold text-xl mb-2 text-center">
                  {item.fields.title}
                </div>
              </Link>
              {/* <p className="text-gray-700 text-base">
                {item.fields.description}
              </p> */}
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #food
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #easy
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #healty
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
