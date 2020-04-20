from typing import List

from gpa_api.models.hg_fluid import HgFluid
from repositories import FluidRepository

from .utils import auto_commit


class FluidService:
    def __init__(self, session):
        self.session = session
        self.fluid_repository = FluidRepository(self.session)

    def get(self, fluid_id: int) -> HgFluid:
        return self.fluid_repository.get(fluid_id)

    @auto_commit
    def create(self, project: HgFluid) -> HgFluid:
        return self.fluid_repository.add(project)

    def get_all(self) -> List[HgFluid]:
        return self.fluid_repository.get_all()
