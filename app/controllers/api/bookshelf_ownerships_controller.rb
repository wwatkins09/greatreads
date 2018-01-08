class bookshelfOwnershipsController < ApplicationController

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
