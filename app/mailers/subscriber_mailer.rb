class SubscriberMailer < ApplicationMailer
    def subscribe_success
        @subscriber = params[:subscriber]
        @url = 'http://ruckuspeak.co.uk'
        mail(to: @subscriber.email, subject: 'Thank you for subscribing to our newsletter')
    end
end
