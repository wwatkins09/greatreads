class AddDefaultColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :bookshelves, :default_shelf, :boolean, null: false, default: false
  end
end
