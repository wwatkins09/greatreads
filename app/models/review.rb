class Review < ApplicationRecord
  validates :user_id, :book_id, :score, presence: true
  validates :user_id, uniqueness: { scope: :book_id }
  validates :score, inclusion: { in: (1..5),
    message: "is not valid." }

  belongs_to :user
  belongs_to :book

end
