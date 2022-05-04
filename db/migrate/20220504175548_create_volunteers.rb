class CreateVolunteers < ActiveRecord::Migration[7.0]
  def change
    create_table :volunteers do |t|
      t.string :email
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
