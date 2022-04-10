from flask import Flask, abort, jsonify, request, make_response
import numpy as np
import pickle

app = Flask(__name__)

Breast_Cancer = pickle.load(open('Models/cancer.pkl', 'rb'))
Diabetes = pickle.load(open('Models/diabetes.pkl', 'rb'))


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


@app.route('/', methods=['GET'])
def helloworld():
    return 'Hello World'


if __name__ == '__main__':
    app.run(port=9000, debug=True)
