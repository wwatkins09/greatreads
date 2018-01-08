class AddBookDescriptionAgain < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :description, :string, null: false
  end
end
