class Api::V1::ProductsController < ApplicationController
    before_action :set_product, only: %i[ show edit update destroy ]
    decorates_assigned :products, :product
    
    # GET /products or /products.json
    def index
        @products = Product.all
        render json: @products
    end
    
    # GET /products/1 or /products/1.json
    def show
        if @product
            render json: @product
        else
            render json: @product.errors
        end
    end
    
    # GET /products/new
    def new
    end
    
    # GET /products/1/edit
    def edit
    end
    
    # POST /products or /products.json
    def create
        @product = Product.new(product_params).decorate
    
        respond_to do |format|
        if @product.save
            format.json { render json: @product.to_json}
        else
            format.json { render json: @product.errors.to_json}
        end
        end
    end
    
    # PATCH/PUT /products/1 or /products/1.json
    def update
        respond_to do |format|
        if @product.update(product_params)
            format.json { render json: @product.to_json}

        else
            format.json { render json: @product.errors.to_json}               

        end
        end
    end
    
    # DELETE /products/1 or /products/1.json
    def destroy
        @product.destroy
    
        respond_to do |format|
        format.html { redirect_to products_url, notice: "Product was successfully destroyed." }
        format.json { head :no_content }
        end
    end
    
    private
        # Use callbacks to share common setup or constraints between actions.
        def set_product
        @product = Product.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def product_params
        params.require(:product).permit(:name, :brand, :size, :description, :price, :color, images: [])
        end
    end
