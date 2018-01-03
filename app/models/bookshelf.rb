class Bookshelf < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user
  has_many :books
  has_many :bookshelf_memberships


end
