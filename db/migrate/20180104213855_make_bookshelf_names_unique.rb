class MakeBookshelfNamesUnique < ActiveRecord::Migration[5.1]
  def change
    add_index :bookshelves, [:name, :user_id], unique: true
  end
end
