class Book < ApplicationRecord
  validates :title, :author, :year, :average_score, presence: true
  has_many :bookshelf_memberships
  has_many :bookshelves, through: :bookshelf_memberships

  has_attached_file: :cover, default_url: "missing.jpeg"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\Z/

end
