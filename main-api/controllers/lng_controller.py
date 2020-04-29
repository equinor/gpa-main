import connexion
from connexion import problem
import requests
import json

from config import Config
from gpa_api.models.calculation import Calculation  # noqa: E501
from gpa_api.models.ship import Ship  # noqa: E501

from controllers.queries import SHIPS_QUERY, CALCULATIONS_QUERY, CALCULATION_QUERY, \
    CALCULATION_MUTATION


def calculate():  # noqa: E501
    """Calculate LNG Ageing

     # noqa: E501

    :rtype: Calculation
    """

    if connexion.request.is_json:
        calculation_body = connexion.request.get_json()
        r = requests.post(url=Config.LNG_URL, json={'query': CALCULATION_MUTATION, 'variables': calculation_body}, headers={})

        j = json.loads(r.text)
        return j['data']['addCalculation']['id'], 200
    else:
        return problem(status=400, title="Bad request", detail="Could not parse json")


def get_calculation(calculation_id):  # noqa: E501
    """Get LNG Ageing calculation

     # noqa: E501

    :param calculation_id: The ID of the calculation
    :type calculation_id: str

    :rtype: Calculation
    """

    r = requests.post(url=Config.LNG_URL, json={'query': CALCULATION_QUERY, 'variables': {'id': calculation_id}}, headers={})
    j = json.loads(r.text)
    calculation = Calculation.from_dict(j['data']['calculation'])

    return calculation, 200


def get_calculations():  # noqa: E501
    """Get a list of LNG Ageing calculations

     # noqa: E501


    :rtype: List[Calculation]
    """

    r = requests.post(url=Config.LNG_URL, json={'query': CALCULATIONS_QUERY}, headers={})
    j = json.loads(r.text)
    calculations = j['data']['calculations']

    result = list(map(lambda s: Calculation.from_dict(s), calculations))

    return result, 200


def get_ships():  # noqa: E501
    """Returns a list of ships.

     # noqa: E501


    :rtype: List[Ship]
    """

    r = requests.post(url=Config.LNG_URL, json={'query': SHIPS_QUERY}, headers={})
    j = json.loads(r.text)
    ships = j['data']['ships']

    result = list(map(lambda s: Ship.from_dict(s), ships))

    return result, 200
