class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(params[:credentials][:username], params[:credentials][:password])
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
      logout
      render "api/users/show"
    else
      render json: "No one logged in", status: 404
    end
  end

end
