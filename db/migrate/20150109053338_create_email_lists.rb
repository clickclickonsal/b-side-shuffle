class CreateEmailLists < ActiveRecord::Migration
  def change
    create_table :email_lists do |t|
      t.string :email_address

      t.timestamps
    end
  end
end
