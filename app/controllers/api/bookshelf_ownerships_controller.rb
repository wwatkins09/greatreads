class Api::BookshelfOwnershipsController < ApplicationController

  def index
    if params[:bookshelf_id]
      @bookshelf_ownerships = Bookshelf.find(params[:bookshelf_id]).bookshelf_ownerships
      render "api/bookshelf_ownerships/index"
    elsif params[:book_id]
      @bookshelf_ownerships = Book.find(params[:book_id]).bookshelf_ownerships
      render "api/bookshelf_ownerships/index"
    end
  end

  def create
    @bookshelf_ownership = BookshelfOwnership.new(bookshelf_ownership_params)
    default_names = []

    # current_user.bookshelf_ownerships.where(book_id: @bookshelf_ownership.book_id).

    if @bookshelf_ownership.save
      render "api/bookshelf_ownerships/show"
    else
      render json: ["Bookshelf already has this book!"], status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def bookshelf_ownership_params
    params.require(:bookshelf_ownership).permit(:bookshelf_id, :book_id)
  end


end
