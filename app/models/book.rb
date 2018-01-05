class Book < ActiveRecord
  validates :title, :author, :year, :average_score, presence: true
  has_many :bookshelf_memberships

end
