class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    render "api/books/index"
  end

  def show
    @book = Book.find(params[:id])
    render "api/books/show"
  end

end
