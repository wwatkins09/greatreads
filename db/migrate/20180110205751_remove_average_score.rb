class RemoveAverageScore < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :average_score
  end
end
