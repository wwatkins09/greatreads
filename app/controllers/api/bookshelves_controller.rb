class Api::BookshelvesController < ApplicationController

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id
    @user = current_user
    if @bookshelf.save
      render "api/bookshelves/show"
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def update
    @bookshelf = current_user.bookshelves.find(params[:id])
    @user = User.find(@bookshelf.user_id)
    if @bookshelf.update_attributes(bookshelf_params)
      render "api/bookshelves/show"
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def index
    @user = User.find(params[:user_id])
    @bookshelves = @user.bookshelves
    render "api/bookshelves/index"
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
    @user = User.find(@bookshelf.user_id)
    render "api/bookshelves/show"
  end

  def destroy
    @bookshelf = current_user.bookshelves.find(params[:id])
    @bookshelf.destroy
    @user = current_user
    render "api/bookshelves/show"
  end

  private
  def bookshelf_params
    params.require(:bookshelf).permit(:name, :user_id)
  end

end
