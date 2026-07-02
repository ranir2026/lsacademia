from flask import Flask,render_template, request

import json
import findGrades
import parsePOS

app = Flask(__name__,template_folder="templates",static_url_path='/static')
@app.route("/")


@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/ninthgrade")
def ninthgrade():
    return render_template('ninthgrade.html')

@app.route("/tenthgrade")
def tenthgrade():
    return render_template('tenthgrade.html')

@app.route("/eleventhgrade")
def eleventhgrade():
    return render_template('eleventhgrade.html')

@app.route("/twelfthgrade")
def twelfthgrade():
    return render_template('twelfthgrade.html')

# FLASK TO HANDLE AJAX SEND (FOR SENDING TOTAL POINTS FROM JAVASCRIPT TO PYTHON)
@app.route('/process', methods=['POST'])
def process():

    # request data (total points submitted) from the form
    totalPoints = request.form.get('totalPoints')
    wantedGrade = request.form.get('wantedGrade')
    print(wantedGrade)

    # convert the data into an integer
    if wantedGrade != None:
        numWantedGrade = float(wantedGrade)

    if totalPoints != None:
        floatTotalPoints = float(totalPoints)

    # request uploaded file from user
    file = request.form.get('file')
    assignments = findGrades.getAllAssignmentGrades(file)

    pE, pT = 0, 0
    for assignment in assignments:
        pE += assignment[0]
        pT += assignment[1]

    # calculate necessary grade with inputted desired grade
    necessaryGrade = findGrades.calculateRequiredNumPoints(pE, pT, floatTotalPoints, numWantedGrade)
    print(necessaryGrade)

    return "You need to earn " + str(necessaryGrade) + " out of " + str(floatTotalPoints) + " points to earn that grade."

# AJAX/FLASK TO SEND POS DICTIONARY OVER FROM PYTHON TO JAVASCRIPT
@app.route('/get-data', methods=['GET'])
def get_data():

    # SETTING INFO AS POS DICTIONARY
    info = parsePOS.formatPOSasDict()

    # JSONIFY POS Dict (by sing json dump)
    json_posDict = json.dumps(info)
    return json_posDict


if __name__ == "__main__":
    app.run()
