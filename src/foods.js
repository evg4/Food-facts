let cakeRecipe =
  "Here are the ingredients: <br /> <ul><li>200g caster sugar</li><li>300g butter</li><li>4 eggs</li><li>200g self-raising flour</li><li>1tsp baking powder</li><li>2 tbsp milk</li><li>140g icing sugar</li><li>170g strawberry jam</li></ul><br />Click <a href='https://www.bbcgoodfood.com/recipes/classic-victoria-sandwich-recipe'>here</a> for the recipe!";
let riceInfo =
  "Did you know?<br /> Rice can be eaten as a savoury side for main dish, or you can add sugar and milk to make rice pudding!";
let mangoTip =
  "Top tip: <br />Check out <a target='_blank' href='https://www.bbcgoodfood.com/recipes/how-to-cut-a-mango'>this link</a> to learn how to cut a mango!";

let foodObject = {
  cake: {
    name: "cake",
    tastiness: "delicious",
    img: "./food-facts/images/cake.jpg",
    furtherInfo: cakeRecipe,
  },
  rice: {
    name: "rice",
    tastiness: "a staple all over the world",
    img: "./food-facts/images/rice.jpg",
    furtherInfo: riceInfo,
  },
  mango: {
    name: "mango",
    tastiness: "juicy",
    img: "./food-facts/images/mango.jpg",
    furtherInfo: mangoTip,
  },
};

export { foodObject };
