class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :score_integer, null: false
      t.string :body_string, null: false, default: ""

      t.timestamps
    end
    add_index :reviews, [:book_id, :user_id], unique: true
  end
end
