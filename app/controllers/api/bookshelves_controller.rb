class Api::BookshelvesController < ApplicationController

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      render "api/bookshelves/show"
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def update
    @bookshelf = current_user.bookshelves.find(params[:id])
    if @bookshelf.update_attributes(bookshelf_params)
      render "api/bookshelves/show"
    else
      render json: @bookshelf.errors.full_messages
    end
  end

  def index
    @bookshelves = Bookshelf.all
    render "api/bookshelves/index"
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
    render "api/bookshelves/show"
  end

  def destroy
    @bookshelf = current_user.bookshelves.find(params[:id])
    @bookshelf.destroy
    render "api/users/user", user: current_user
  end

  private
  def bookshelf_params
    params.require(:bookshelf).permit(:name, :user_id)
  end

end
