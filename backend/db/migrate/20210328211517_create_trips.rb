class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :title
      t.string :date
      t.string :season
      t.string :people
      t.boolean :completed
      t.integer :user_id

      t.timestamps
    end
  end
end
