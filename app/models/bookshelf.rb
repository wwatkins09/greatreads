class Bookshelf < ApplicationRecord
  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :bookshelf_ownerships, dependent: :destroy
  has_many :books, through: :bookshelf_ownerships


end
