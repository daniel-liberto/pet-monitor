# Import flask and datetime module for showing date and time
from flask import Flask, jsonify, request

# Initializing flask app
app = Flask(__name__)

# Route for seeing a data


@app.route('/useradd', methods=['POST'])
def useradd():
    name = request.json['name']
    email = request.json['email']

    return jsonify({'success': 'Success post'})


# Running app
if __name__ == '__main__':
    app.run(debug=True)
