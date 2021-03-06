class CreateBookshelfOwnerships < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelf_ownerships do |t|
      t.integer :bookshelf_id, null: false
      t.integer :book_id, null: false

      t.timestamps
    end
    add_index :bookshelf_ownerships, [:bookshelf_id, :book_id], unique: true
  end
end
