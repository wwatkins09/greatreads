class Book < ApplicationRecord
  validates :title, :author, :year, :description, presence: true
  has_many :bookshelf_ownerships, dependent: :destroy
  has_many :bookshelves, through: :bookshelf_ownerships
  has_many :reviews, dependent: :destroy

  has_attached_file :cover, default_url: "missing.jpeg", :s3_protocol => :https
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\Z/

end
