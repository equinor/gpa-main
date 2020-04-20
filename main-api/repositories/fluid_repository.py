from typing import List

from database import Component as ComponentModel
from database import Fluid as FluidModel
from gen.api.gpa_api.models.hg_component import HgComponent
from gpa_api.models.hg_fluid import HgFluid


def create_fluid(fluid_model: FluidModel) -> HgFluid:
    components = [
        HgComponent(component_type=component_model.name, value=component_model.value)
        for component_model in fluid_model.components
    ]
    return HgFluid(
        id=fluid_model.id,
        name=fluid_model.name,
        components=components,
        created_date=fluid_model.created_date,
    )


class FluidRepository:
    def __init__(self, session):
        self.session = session

    def add(self, fluid: HgFluid) -> HgFluid:
        fluid_model = FluidModel(
            name=fluid.name,
            components=[
                ComponentModel(
                    name=str(component.component_type), value=component.value
                )
                for component in fluid.components
            ],
        )

        self.session.add(fluid_model)
        self.session.flush()
        return create_fluid(fluid_model)

    def get(self, fluid_id: int) -> HgFluid:
        fluid_model = (
            self.session.query(FluidModel).filter(FluidModel.id == fluid_id).first()
        )
        return create_fluid(fluid_model) if fluid_model else None

    def get_all(self) -> List[HgFluid]:
        fluid_models = self.session.query(FluidModel).all()
        return [create_fluid(fluid_model) for fluid_model in fluid_models]
