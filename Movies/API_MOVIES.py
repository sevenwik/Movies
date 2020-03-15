from flask import Flask,jsonify
import json
app = Flask(__name__)

@app.route('/get', methods=['GET'])
def get_tasks():
    with open('moviesdata.json') as f:
        data = json.load(f)
    return jsonify({'Movies': data})

if __name__ == '__main__':
    app.run(debug=True)
