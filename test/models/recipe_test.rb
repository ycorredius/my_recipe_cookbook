# == Schema Information
#
# Table name: recipes
#
#  id         :integer          not null, primary key
#  avatar     :string
#  is_private :boolean          default(FALSE)
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
require "test_helper"

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
