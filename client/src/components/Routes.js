import React from 'react'
import RecipeContainer from '../containers/RecipeContainer'
import {Switch,Route} from 'react-router-dom'
import NewRecipeForm from './recipes/NewRecipeForm';
import UploadImage from './recipes/UploadImage'
import RecipeShow from './recipes/RecipeShow'
import Signup from './user/Signup'
import Login from './user/Login'
import UpdateRecipeForm from './recipes/UpdateRecipeForm'
import UserRecipes from './recipes/UserRecipes';

export const Routes = () => (
  <div>
    <Switch>
      <Route
        exact
        path={"/recipes/:recipeId"}
        render={(showProps) => <RecipeShow {...showProps} />}
      />
      <Route
        exact
        path={"/users/:userId/recipes/new_recipe"}
        render={(props) => <NewRecipeForm userId={props.match.params.userId} />}
      />
      <Route
        exact
        path={"/sign_up"}
        render={(routeProps) => <Signup {...routeProps} />}
      />
      <Route
        exact
        path={"/login"}
        render={(routeProps) => <Login {...routeProps} />}
      />
      <Route
        exact
        path={"/recipes/:recipeId/upload_image"}
        render={(props) => (
          <UploadImage props={props} recipeId={props.match.params.recipeId} />
        )}
      />
      <Route
        exact
        path={"/users/:userId/recipes"}
        render={(props) => (
          <UserRecipes props={props} userId={props.match.params.userId} />
        )}
      />
      \\TODO: Fix routing between edit and recpie show
      <Route
        exact
        path={"/recipes/:recipeId/edit"}
        render={(props) => <UpdateRecipeForm props={props} />}
      />
      <Route path={"/"} render={() => <RecipeContainer />} />
    </Switch>
  </div>
);
	
export default Routes;