class Api::BooksController < ApplicationController

  def index
    if params[:bookshelf_id]
      @bookshelf = Bookshelf.find(params[:bookshelf_id])
      @books = @bookshelf.books
    else
      @books = Book.all
    end
    render "api/books/index"
  end

  def show
    @book = Book.find(params[:id])
    render "api/books/show"
  end

end
