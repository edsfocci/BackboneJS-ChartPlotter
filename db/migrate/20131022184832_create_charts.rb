class CreateCharts < ActiveRecord::Migration
  def change
    create_table :charts do |t|
      t.integer :user_id, null: false
      t.string  :title,   null: false
      t.string  :x_label
      t.string  :y_label

      t.timestamps
    end

    add_index :charts, :user_id
  end
end
