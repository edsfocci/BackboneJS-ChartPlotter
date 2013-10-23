class CreatePointSets < ActiveRecord::Migration
  def change
    create_table :point_sets do |t|
      t.integer :chart_id,        null: false
      t.string  :point_set_label, null: false

      t.timestamps
    end

    add_index :point_sets, :chart_id
  end
end
