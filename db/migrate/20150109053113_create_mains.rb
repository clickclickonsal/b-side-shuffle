class CreateMains < ActiveRecord::Migration
  def change
    create_table :mains do |t|
      t.string :video_url

      t.timestamps
    end
  end
end
