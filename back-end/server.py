# Import flask and sqlalchemy pip
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

# Initializing flask app
app = Flask(__name__)

# Database configuration                        Username:password@hostname/databasename
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql+pymysql://root:''@localhost/petmonitor'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


# Route for add user
@app.route('/useradd', methods=['POST'])
def useradd():
    name = request.json['name']
    email = request.json['email']

    return jsonify({'success': 'Success post'})


# Running app
if __name__ == '__main__':
    app.run(debug=True)
