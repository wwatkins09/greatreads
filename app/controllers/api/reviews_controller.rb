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
    @review = Review.new(reviewParams)
    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private
  def reviewParams
    params.require(:review).permit(:user_id, :book_id, :score, :body)
  end


end
