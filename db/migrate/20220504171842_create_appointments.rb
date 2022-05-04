class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :date_of-reading
      t.string :notes

      t.timestamps
    end
  end
end
