class Api::ReviewsController < ApplicationController

  def index
    if params[:user_id]
      @reviews = Review.find_by(user_id: params[:user_id])
      render "api/reviews/index"
    elsif params[:book_id]
      @reviews = Review.find_by(book_id: params[:book_id])
      render "api/reviews/index"
    end
  end

  def show

  end

  def create

  end

  def update

  end

  def destroy

  end


end
