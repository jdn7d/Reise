class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :city
      t.string :country
      t.integer :length
      t.string :activities
      t.string :language
      t.string :currency
      t.integer :trip_id
      
      t.timestamps
    end
  end
end
