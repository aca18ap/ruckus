class AddFieldsToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :name, :string
    add_column :products, :brand, :string
    add_column :products, :size, :string
    add_column :products, :description, :string
    add_column :products, :price, :double
    add_column :products, :color, :string
  end
end
