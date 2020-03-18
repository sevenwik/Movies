from flask import Flask,jsonify
import json
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/movies/*": {"origins": "*"}})
@app.route('/movies/get', methods=['GET'])
def get_tasks():
    with open('moviesdata.json') as f:
        data = json.load(f)
    return jsonify({'Movies': data})

if __name__ == '__main__':
    app.run(debug=True)
