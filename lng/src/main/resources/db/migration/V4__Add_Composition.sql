ALTER TABLE calculation_step
    DROP COLUMN gcv2,
    DROP COLUMN gcv2_unit;

ALTER TABLE calculation_step
    ADD COLUMN gcvMass      float8,
    ADD COLUMN gcvMass_unit varchar(255);

ALTER TABLE fluid
    DROP COLUMN calculation_id,
    ADD COLUMN id int8 not null,
    ADD CONSTRAINT PK_fluid primary key (id);

ALTER TABLE calculation
    ADD COLUMN fluid_id int8;

ALTER TABLE calculation_step
    ADD COLUMN gas_id    int8,
    ADD COLUMN liquid_id int8;

alter table calculation
    add constraint FK_calculation_fluid foreign key (fluid_id) references fluid;

alter table calculation_step
    add constraint FK_gas_fluid foreign key (gas_id) references fluid,
    add constraint FK_liquid_fluid foreign key (liquid_id) references fluid;