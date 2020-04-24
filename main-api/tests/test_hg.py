from tests.factories import FluidFactory


def test_hg_fluids(test_client, session):
    expected_fluid = FluidFactory.create(components=4)
    session.commit()
    response = test_client.get(f"/api/v1/hg/fluids")

    assert response.status_code == 200
    assert response.json == [
        {
            "id": expected_fluid.id,
            "name": expected_fluid.name,
            "createdDate": expected_fluid.created_date.astimezone()
            .isoformat()
            .replace("+00:00", "Z"),
            "components": [
                {"component_type": c.name, "value": c.value}
                for c in expected_fluid.components
            ],
        }
    ]
