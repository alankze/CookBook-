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

  console.log(recipeItem);

  return (
    <div>
      {recipeItem && (
        <>
          <h2>{recipeItem.fields.title}</h2>
          {/* {recipeItem.fields.images.map((image) => ( */}
          <img
            className="img"
            key={recipeItem.fields.image.sys.id}
            src={recipeItem.fields.image.fields.file.url}
            alt={recipeItem.fields.title}
          />
          {/* ))} */}
          {/* <RichText document={recipeItem.fields.article} /> */}
        </>
      )}
    </div>
  );
};

export default RecipePage;
