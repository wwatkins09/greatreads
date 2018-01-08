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

  def show
    @bookshelf_ownership = BookshelfOwnership.find_by(bookshelf_id: params[:bookshelf_id], book_id: params[:book_id])
    if @bookshelf_ownership
      render "api.bookshelf_ownerships/show"
    end
  end

  def create
    @bookshelf_ownership = BookshelfOwnership.new(bookshelf_ownership_params)

    if Bookshelf.find(@bookshelf_ownership.bookshelf_id).default_shelf == true
      # get all bookshelf ownerships belonging to the current user and the book being added
      current_user.bookshelf_ownerships.where({book_id: @bookshelf_ownership.book_id}).each do |bookshelf_ownership|
        bookshelf = Bookshelf.find(bookshelf_ownership.bookshelf_id)
        if bookshelf.default_shelf == true
          bookshelf_ownership.destroy!
        end
      end


    end

    if @bookshelf_ownership.save
      render "api/bookshelf_ownerships/show"
    else
      render json: ["This book is already on this bookshelf!"], status: 422
    end
  end

  def update
  end

  def destroy
    @bookshelf_ownership = BookshelfOwnership.find(params[:bookshelf_ownership_id])
    @bookshelf_ownership.destroy
    render "api/bookshelf_ownerships/show"
  end

  private
  def bookshelf_ownership_params
    params.require(:bookshelf_ownership).permit(:bookshelf_id, :book_id)
  end


end
