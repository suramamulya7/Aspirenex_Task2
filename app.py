from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# In-memory storage for quizzes (replace with a database for production)
quizzes = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/save_quiz', methods=['POST'])
def save_quiz():
    data = request.json
    quizzes.append(data)
    return jsonify({"message": "Quiz saved!"})

@app.route('/get_quizzes', methods=['GET'])
def get_quizzes():
    return jsonify(quizzes)

if __name__ == '__main__':
    app.run(debug=True)
