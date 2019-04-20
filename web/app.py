from flask import Flask, jsonify, request, render_template
import numpy as np
import pickle
import pandas

model = pickle.load(open('model.pkl', 'rb'))

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/api/v1/listings/price_m2_prediction', methods=['POST'])
def api_v1_listings_price_m2_prediction():
  data = request.get_json(force=True)

  structured_data = pandas.DataFrame([{
    "areaM2": data["areaM2"],
    "lat": data["lat"],
    "lng": data["lng"],
    "nrOfRooms": data["nrOfRooms"],
    "floorNr": data["floorNr"],
    "nrOfFloors": data["nrOfFloors"],
    "yearBuilt": data["yearBuilt"],
  }])

  prediction = model.predict(structured_data).tolist()

  return jsonify(results=prediction)

if __name__ == '__main__':
    app.run(host='0.0.0.0')