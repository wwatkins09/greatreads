class Api::BookshelfOwnershipsController < ApplicationController

  def index
    if params[:bookshelf_id]
      @bookshelf_ownerships = BookshelfOwnership.find_by(bookshelf_id: bookshelf_id)
      render "api/bookshelf_ownerships/index"
    end
  end

  def create
    @bookshelf_ownership = BookshelfOwnership.new(bookshelf_ownership_params)
    if @bookshelf_ownership.save
      render "api/bookshelf_ownerships/show"
    else
      render json: @bookshelf_ownership.errors.full_messages, status: 422
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
