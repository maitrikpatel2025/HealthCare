from flask import Flask, abort, jsonify, request, make_response
import numpy as np
import pickle

app = Flask(__name__)

Breast_Cancer = pickle.load(open('Models/cancer.pkl', 'rb'))
Diabetes = pickle.load(open('Models/diabetes.pkl', 'rb'))
Heart = pickle.load(open('Models/heart.pkl','rb'))
Liver = pickle.load(open('Models/liver.pkl','rb'))


@app.route('/healthcare/api/v1/breastcancer', methods=['POST'])
def breast_Cancer_Pridect():
    data = request.get_json(force=True)
    cancerpridect = [data["radius_mean"], data["texture_mean"], data["perimeter_mean"], data["area_mean"],
                     data["smoothness_mean"], data["compactness_mean"], data["concavity_mean"],
                     data["concave_points_mean"],
                     data["symmetry_mean"], data["radius_se"], data["perimeter_se"], data["area_se"],
                     data["compactness_se"], data["concavity_se"], data["concave_points_se"],
                     data["fractal_dimension_se"],
                     data["radius_worst"], data["texture_worst"], data["perimeter_worst"], data["area_worst"],
                     data["smoothness_worst"], data["compactness_worst"], data["concavity_worst"],
                     data["concave_points_worst"], data["symmetry_worst"], data["fractal_dimension_worst"]]
    cancerpridect = np.array([cancerpridect])
    model_pridect = Breast_Cancer.predict(cancerpridect)
    output = model_pridect[0]
    return make_response(jsonify(
        result=str(output)
    ), 200)


@app.route('/healthcare/api/v1/diabetes', methods=['POST'])
def Diabetes_Pridect():
    data = request.get_json(force=True)
    diabetespridect = [data["pregnancies"], data["glucose"], data["bloodPressure"],
                       data["skinThickness"], data["insulin"], data["bmi"],
                       data["diabetesPedigreeFunction"],
                       data["age"]]
    diabetespridect = np.array([diabetespridect])
    model_pridect = Diabetes.predict(diabetespridect)
    output = model_pridect[0]
    return make_response(jsonify(
        result=str(output)
    ), 200)

@app.route('/healthcare/api/v1/heart', methods=['POST'])
def heart_Pridect():
    data = request.get_json(force=True)
    # data = {
    #     "Age": 28,
    #     "ChestPainType": "ta",
    #     "Cholesterol":         230,
    #     "Sex": "M",
    #     "RestingECG":         "ST",
    #     "ExerciseAngina":     "Y",
    #     "ST_Slope":           "down",
    #     "FastingBS": 1,
    #     "RestingBP": 145,
    #     "MaxHR": 60,
    #     "Oldpeak":-2.6
    # }

    painType = ["asy","ata","nap","ta"]
    sexType = ["f","m"]
    restingECGType = ["lvh", "normal", "st"]
    exerciseAnginaType = ["n","y"]
    stslopeType = ["down","flat","up"]

    ChestPainType = [0,0,0,0]
    Sex = [0,0]
    RestingECG = [0,0,0]
    ExerciseAngina = [0,0]
    ST_Slope = [0,0,0]

    for i in range(0, len(painType)):
        if data["ChestPainType"].lower() == painType[i]:
            ChestPainType[i] = 1

    for i in range(0, len(sexType)):
        if data["Sex"].lower() == sexType[i]:
            Sex[i] = 1

    for i in range(0, len(restingECGType)):
        if data["RestingECG"].lower() == restingECGType[i]:
            RestingECG[i] = 1

    for i in range(0, len(exerciseAnginaType)):
        if data["ExerciseAngina"].lower() == exerciseAnginaType[i]:
            ExerciseAngina[i] = 1

    for i in range(0, len(stslopeType)):
        if data["ST_Slope"].lower() == stslopeType[i]:
            ST_Slope[i] = 1

    heartpridect = [data["Age"], data["RestingBP"], data["Cholesterol"], data["FastingBS"],
                     data["MaxHR"], data["Oldpeak"],ChestPainType[0],
                     ChestPainType[1],
                     ChestPainType[2], ChestPainType[3],
                     Sex[0], Sex[1],
                     RestingECG[0], RestingECG[1], RestingECG[2],
                     ExerciseAngina[0], ExerciseAngina[1],
                     ST_Slope[0], ST_Slope[1], ST_Slope[2]
                     ]
    print(heartpridect)
    heartpridect = np.array([heartpridect])
    model_pridect = Heart.predict(heartpridect)
    output = model_pridect[0]
    return make_response(jsonify(
        result=str(output)
    ), 200)

@app.route('/healthcare/api/v1/liver', methods=['POST'])
def Liver_Pridect():
    data = request.get_json(force=True)
    # data = {
    # "Age": "65",
    # "Gender": "F",
    # "Total_Bilirubin": "0.7",
    # "Direct_Bilirubin": "0.1",
    # "Alkaline_Phosphotase": "187",
    # "Alamine_Aminotransferase": "16",
    # "Aspartate_Aminotransferase": "18",
    # "Total_Protiens": "6.8",
    # "Albumin": "3.3",
    # "Albumin_and_Globulin_Ratio": "0.90",
    # }


    sexType = ["f","m"]
    Sex = [0,0]



    for i in range(0, len(sexType)):
        if data["Gender"].lower() == sexType[i]:
            Sex[i] = 1


    liverpridect = [
        data["Age"],
        data["Total_Bilirubin"],
        data["Direct_Bilirubin"],
        data["Alkaline_Phosphotase"],
        data["Alamine_Aminotransferase"],
        data["Aspartate_Aminotransferase"],
        data["Total_Protiens"],
        data["Albumin"],
        data["Albumin_and_Globulin_Ratio"],
        Sex[0], Sex[1],
                     ]
    print(liverpridect)
    liverpridect = np.array([liverpridect])
    model_pridect = Liver.predict(liverpridect)
    output = model_pridect[0]
    return make_response(jsonify(
        result=str(output)
    ), 200)

@app.route('/', methods=['GET'])
def helloworld():
    return 'Hello World'



if __name__ == '__main__':
    app.run(port=9000, debug=True)
