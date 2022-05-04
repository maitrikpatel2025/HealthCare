from flask import Flask, abort, jsonify, request, make_response
import numpy as np
import pandas as pd
import pickle
import json

app = Flask(__name__)

Breast_Cancer = pickle.load(open('Models/cancer.pkl', 'rb'))
Diabetes = pickle.load(open('Models/diabetes.pkl', 'rb'))
Heart = pickle.load(open('Models/heart.pkl', 'rb'))
Liver = pickle.load(open('Models/liver.pkl', 'rb'))
kidney = pickle.load(open('Models/kidney.pkl', 'rb'))

data_Cancer = pd.read_csv('./DataSet/BrestCancer.csv')
data_diabetes = pd.read_csv('./DataSet/diabetes.csv')
data_heart = pd.read_csv('./DataSet/heart.csv')
data_liver = pd.read_csv('./DataSet/liver.csv')
data_kidney = pd.read_csv('./DataSet/kidney.csv')

data_Cancer.insert(0, '_id', range(1, 1 + len(data_Cancer)))
data_Cancer2 = data_Cancer.to_json(orient='records')
json_Cancer = json.dumps(data_Cancer2)

data_diabetes.insert(0, '_id', range(1, 1 + len(data_diabetes)))
data_diabetes2 = data_diabetes.to_json(orient='records')
json_diabetes = json.dumps(data_diabetes2)

data_heart.insert(0, '_id', range(1, 1 + len(data_heart)))
data_heart2 = data_heart.to_json(orient='records')
json_heart = json.dumps(data_heart2)

data_liver.insert(0, '_id', range(1, 1 + len(data_liver)))
data_liver2 = data_liver.to_json(orient='records')
json_liver = json.dumps(data_liver2)

data_kidney.insert(0, '_id', range(1, 1 + len(data_kidney)))
data_kidney2 = data_kidney.to_json(orient='records')
json_kidney = json.dumps(data_kidney2)

@app.route('/healthcare/api/v1/breastcancer/add', methods=['POST'])
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

@app.route('/healthcare/api/v1/breastcancer', methods=['get'])
def Breast_cancer(json_string = json_Cancer):
    return make_response(
        json.loads(json_string)
    , 200)

@app.route('/healthcare/api/v1/diabetes/add', methods=['POST'])
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

@app.route('/healthcare/api/v1/diabetes', methods=['get'])
def diabetes(json_string = json_diabetes):
    return make_response(
        json.loads(json_string)
    , 200)

@app.route('/healthcare/api/v1/heart/add', methods=['POST'])
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

    painType = ["asy", "ata", "nap", "ta"]
    sexType = ["f", "m"]
    restingECGType = ["lvh", "normal", "st"]
    exerciseAnginaType = ["n", "y"]
    stslopeType = ["down", "flat", "up"]

    ChestPainType = [0, 0, 0, 0]
    Sex = [0, 0]
    RestingECG = [0, 0, 0]
    ExerciseAngina = [0, 0]
    ST_Slope = [0, 0, 0]

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
                    data["MaxHR"], data["Oldpeak"], ChestPainType[0],
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

@app.route('/healthcare/api/v1/heart', methods=['get'])
def Heart(json_string = json_heart):
    return make_response(
        json.loads(json_string)
    , 200)

@app.route('/healthcare/api/v1/liver/add', methods=['POST'])
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

    sexType = ["f", "m"]
    Sex = [0, 0]

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

@app.route('/healthcare/api/v1/liver', methods=['get'])
def Liver(json_string = json_liver):
    return make_response(
        json.loads(json_string)
    , 200)

@app.route('/healthcare/api/v1/kidney/add', methods=['POST'])
def Kidney_Pridect():
    data = request.get_json(force=True)

    kidneypridect = [
        data["age"],
        data["blood_pressure"],
        data["specific_gravity"],
        data["albumin"],
        data["sugar"],
        data["red_blood_cells"],
        data["pus_cell"],
        data["pus_cell_clumps"],
        data["bacteria"],
        data["blood_glucose_random"],
        data["blood_urea"],
        data["serum_creatinine"],
        data["sodium"],
        data["potassium"],
        data["haemoglobin"],
        data["packed_cell_volume"],
        data["white_blood_cell_count"],
        data["red_blood_cell_count"],
        data["hypertension"],
        data["diabetes_mellitus"],
        data["coronary_artery_disease"],
        data["appetite"],
        data["peda_edema"],
        data["aanemia"],
    ]
    print(kidneypridect)
    kidneypridect = np.array([kidneypridect])
    model_pridect = kidney.predict(kidneypridect)
    output = model_pridect[0]
    return make_response(jsonify(
        result=str(output)
    ), 200)

@app.route('/healthcare/api/v1/kidney', methods=['get'])
def Kidney(json_string = json_kidney):
    return make_response(
        json.loads(json_string)
    , 200)


@app.route('/', methods=['GET'])
def helloworld():
    return 'Hello World'


if __name__ == '__main__':
    app.run(port=9000, debug=True)
