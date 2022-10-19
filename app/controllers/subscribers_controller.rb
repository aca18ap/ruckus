class SubscribersController < ApplicationController
  def index
    @subscriber = Subscriber.new
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    cookies[:saved_lead] = false
    if @subscriber.save
      cookies[:saved_lead] = true
      SubscriberMailer.with(subscriber: @subscriber).subscribe_success.deliver_now
    end
    render json: { save: cookies[:saved_lead] }
  end

  private 
  def subscriber_params
    params.require(:subscriber).permit(:name, :email, :source)
  end


end
