import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RichText from "./RichText";
import { client } from "../contenful";

const RecipePage = () => {
  const [recipeItem, setRecipeItem] = useState(null);
  const { recipesId } = useParams();

  useEffect(() => {
    client
      .getEntry(recipesId)
      .then((response) => setRecipeItem(response))
      .catch(console.error);
  }, []);

  //console.log(recipeItem);

  return (
    <div className="bg-gradient-to-r from-bk1 to-bk2  text-white m-auto mt-10 min-h-[50rem] w-[65%] rounded-xl pl-10 pb-10 mb-10 ">
      <div className="flex min-h-[50rem] relative">
        {recipeItem && (
          <>
            <div className="flex flex-col ">
            <h1 className="font-bold text-2xl pt-20">Recipes.</h1> 
              <h2 className="pt-10 font-semibold text-5xl pb-[7rem]">
                {recipeItem.fields.title}
              </h2>
              {/* {recipeItem.fields.images.map((image) => ( */}
              {/* <img
              className="img"
              key={recipeItem.fields.image.sys.id}
              src={recipeItem.fields.image.fields.file.url}
              alt={recipeItem.fields.title}
            /> */}
              {/* ))} */}
              <div className="w-[75%] text-lg">
                <RichText document={recipeItem.fields.description} />
              </div>
            </div>
            <div className="bg-white rounded-3xl w-5/6 m-3 pt-[5rem] px-10 text-black flex flex-col font-large text-lg min-w-[25rem]">
              <RichText document={recipeItem.fields.recipesRich} />
              <div className="h-10 text-center  m-auto w-full rounded-xl">
                <button className="bg-orange-300 m-3 w-[40%] py-[0.3rem] px-[1rem] rounded-md hover:bg-button">SHARE</button>
				<button className="bg-orange-300 m-3 w-[40%] py-[0.3rem] px-[1rem] rounded-md hover:bg-button">PRINT</button>
              </div>
            </div>

            <div className="absolute top-[10rem] right-[0] left-[20rem] w-[30rem]">
              {
                <img
                  className="img w-[50%] h-[50%] rounded-full"
                  key={recipeItem.fields.pagePhoto.sys.id}
                  src={recipeItem.fields.pagePhoto.fields.file.url}
                  alt={recipeItem.fields.title}
                />
              }
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
