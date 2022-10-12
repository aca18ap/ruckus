class ProductDecorator < Draper::Decorator
  delegate_all

  # Define presentation-specific methods here. Helpers are accessed through
  # `helpers` (aka `h`). You can override attributes, for example:
  #
  #   def created_at
  #     helpers.content_tag :span, class: 'time' do
  #       object.created_at.strftime("%a %m/%d/%y")
  #     end
  #   end

  def product_thumbnail(height = nil, width = nil)
    if images.attached?
      image = images[0]
      meta = ActiveStorage::Analyzer::ImageAnalyzer.new(image).metadata
      height = meta['width'] if height.nil?
      width = meta['width'] if width.nil?
      h.image_tag(image, class: 'img-fluid', size: "#{height}x#{width}", alt: description, loading: 'lazy')
    else
      h.image_tag('default-image.jpg', class: 'img-fluid', size: "#{height}x#{width}", alt: description,
                                       loading: 'lazy')
    end
  end

end
