
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

# Initialise the stick library just once
#and reuse it every time we look up
StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

#1. show a blank form for typing stocks into
get '/'do
  erb:form
end

#2 form submits to here, does the lookup, print results
get "/lookup" do

  stock=StockQuote::Stock.quote( params[:stock_code])
  # p stock
@price = stock.latest_price
@company=stock.company_name

@names = [
  'Zara', 'Stacey', 'Alistar'
]

  erb:stock_info
end
