class Api::SessionsControllerController < ApplicationController


  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout(@user)
      render "api/users/show"
    else
      render json: "No one logged in", status: 404
    end
  end

end
