class BookshelfOwnership < ApplicationRecord
  validates :bookshelf_id, :book_id, presence: true
  validates :bookshelf_id, uniqueness: { scope: :book_id }

  belongs_to :book
  belongs_to :bookshelf

end
