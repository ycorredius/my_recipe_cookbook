class UsersController < ApplicationController
   before_action :set_user, only: [:show, :update]

    def create
          @user = User.new(user_params)
        if @user.valid? && @user.save
          render json: UserSerializer.new(@user).serialized_json
        else
          render :json => {
            errors: @user.errors.full_messages 
          }
        end
    end

  def show
    render json: @user
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  def destroy
    @user.destroy
  end

  def find
   @user = User.find_by(email: params[:user][:email])
   if @user
     render json: @user
   else
     @errors = @user.errors.full_messages
     render json: @errors
   end
  end

  def recipes
    @user = User.find_by_id(params[:userId])
    if @user.recipes
      recipes = @user.recipes
      render json: RecipeSerializer.new(recipes).serializable_hash
    else
      errors = "No recipes availabe"
      render json: errors
    end
  end

  private

    def set_user
      @user = User.find_by(id: params[:id])
    end

    def user_params
      params.require(:user).permit(:userName,:email,:password,:password_confirmation)
    end 
end
