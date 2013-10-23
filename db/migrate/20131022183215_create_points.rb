class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :point_set_id,  null: false
      t.float   :x_coord,       null: false
      t.float   :y_coord,       null: false

      t.timestamps
    end

    add_index :points, :point_set_id
  end
end
