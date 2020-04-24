import datetime

import factory
from database import Component as ComponentModel
from database import Fluid as FluidModel
from factory.fuzzy import FuzzyChoice, FuzzyDateTime, FuzzyDecimal

from .conftest import session_factory


class FluidFactory(factory.alchemy.SQLAlchemyModelFactory):
    id = factory.Sequence(lambda n: "%s" % n)
    name = factory.Faker("name")
    created_date = FuzzyDateTime(
        datetime.datetime(2008, 1, 1, tzinfo=datetime.timezone.utc)
    )

    @factory.post_generation
    def components(self, create, extracted, **kwargs):
        if not create:
            return

        if extracted:
            assert isinstance(extracted, int)
            ComponentFactory.create_batch(size=extracted, fluid_id=self.id, **kwargs)

    class Meta:
        model = FluidModel
        sqlalchemy_session = session_factory


class ComponentFactory(factory.alchemy.SQLAlchemyModelFactory):
    id = factory.Sequence(lambda n: "%s" % n)
    name = FuzzyChoice(["methane", "ethane", "propane"])
    value = FuzzyDecimal(100)

    class Meta:
        model = ComponentModel
        sqlalchemy_session = session_factory
