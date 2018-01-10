class FixReviewColumnNames < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :body_string
    remove_column :reviews, :score_integer
    add_column :reviews, :body, :string
    add_column :reviews, :score, :integer, null: false
  end
end
