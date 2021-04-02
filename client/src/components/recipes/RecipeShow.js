import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/recipe/recipeActions'

export class RecipeShow extends Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId)
  }

  render() {
    if (!this.props.recipe) {
      return (
        <div>
          <h1>Not there yet</h1>
        </div>
      )
    } else {
      const{id,name,ingredients,instructions,categories,image} = this.props.recipe
      return (
        <div>
          <img
            src={image}
            alt="food"
          />
          <h1>{this.props.recipe.data.attributes.name}</h1>
          <ul>
            {
              this.props.recipe.data.attributes.categories.map((item) => {
                return (
                  <p>
                    {item.tag}
                  </p>
                );
              })}
          </ul>
          {this.props.recipe.data.attributes.instructions.map((item) => {
            return (
              <p>
                {item.stepNumber}: {item.content}
              </p>
            );
          })}
          {this.props.recipe.data.attributes.ingredients.map((item) => {
            return (
              <p>
                {item.name}: {item.quantity}
              </p>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipeReducer.recipe
  }
}
export default connect(mapStateToProps, { fetchRecipe })(RecipeShow)