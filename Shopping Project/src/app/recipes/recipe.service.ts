import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'this is testing recipe','https://showmetheyummy.com/wp-content/uploads/2018/07/Easy-Summer-Recipes-2018.jpg'),
        new Recipe('A test recipe', 'this is testing recipe','https://showmetheyummy.com/wp-content/uploads/2018/07/Easy-Summer-Recipes-2018.jpg')
  
      ];

      getRecipes(){
          return this.getRecipes.recipes.slice(;)
      }
}