class Api::ReviewsController < ApplicationController

  def index
    if params[:user_id]
      @reviews = Review.where(user_id: params[:user_id])
      render "api/reviews/index"
    elsif params[:book_id]
      @reviews = Review.where(book_id: params[:book_id])
      render "api/reviews/index"
    end
  end

  def show

  end

  def create
    @review = Review.new(review_params)
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
  def review_params
    params.require(:review).permit(:user_id, :book_id, :score, :body)
  end


end
