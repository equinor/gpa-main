from typing import List, Tuple, Union

import connexion
from connexion import problem
from connexion.lifecycle import ConnexionResponse
from flask import current_app
from gpa_api.models.hg_fluid import HgFluid
from services import FluidService


def create_fluid() -> Union[Tuple[HgFluid, int], ConnexionResponse]:
    """Create hg fluid

    :rtype: Fluid
    """
    if connexion.request.is_json:
        fluid = HgFluid.from_dict(connexion.request.get_json())
        fluid_service = FluidService(current_app.db_session)
        return fluid_service.create(fluid), 201
    else:
        return problem(status=400, title="Bad request", detail="Could not parse json")


def get_fluid(fluid_id: int) -> Union[HgFluid, ConnexionResponse]:
    """Get fluid

    :param fluid_id: The id of the fluid
    :rtype: Fluid
    """

    fluid_service = FluidService(current_app.db_session)
    fluid = fluid_service.get(fluid_id)
    if fluid is None:
        return problem(
            status=404, title="Not found", detail=f"No fluid with id {fluid_id}"
        )

    return fluid


def get_fluids() -> List[HgFluid]:
    """Get hg fluids.

    :rtype: List[Fluid]
    """
    fluid_service = FluidService(current_app.db_session)
    return fluid_service.get_all()
