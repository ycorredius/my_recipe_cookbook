# == Schema Information
#
# Table name: recipes
#
#  id         :integer          not null, primary key
#  name       :string
#  photo_url  :string           default("https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Recipe < ApplicationRecord
    #Fix recipe_ingredients and ingredients association
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredient
    #Catgories association works.
    has_many :recipe_categories
    has_many :categories, through: :recipe_categories
    #This association has not been touched or examined.
    has_many :instructions


end