ALTER TABLE calculation_step
DROP COLUMN gcv2,
DROP COLUMN gcv2_unit;

ALTER TABLE calculation_step
ADD COLUMN gcvMass float8,
ADD COLUMN gcvMass_unit varchar(255),

ADD COLUMN xMethane float8,
ADD COLUMN xMethane_unit varchar(255),
ADD COLUMN xEthane float8,
ADD COLUMN xEthane_unit varchar(255),
ADD COLUMN xPropane float8,
ADD COLUMN xPropane_unit varchar(255),
ADD COLUMN xIC4 float8,
ADD COLUMN xIC4_unit varchar(255),
ADD COLUMN xNC4 float8,
ADD COLUMN xNC4_unit varchar(255),
ADD COLUMN xIC5 float8,
ADD COLUMN xIC5_unit varchar(255),
ADD COLUMN xNC5 float8,
ADD COLUMN xNC5_unit varchar(255),
ADD COLUMN xNC6 float8,
ADD COLUMN xNC6_unit varchar(255),
ADD COLUMN xNitrogen float8,
ADD COLUMN xNitrogen_unit varchar(255),

ADD COLUMN yMethane float8,
ADD COLUMN yMethane_unit varchar(255),
ADD COLUMN yEthane float8,
ADD COLUMN yEthane_unit varchar(255),
ADD COLUMN yPropane float8,
ADD COLUMN yPropane_unit varchar(255),
ADD COLUMN yIC4 float8,
ADD COLUMN yIC4_unit varchar(255),
ADD COLUMN yNC4 float8,
ADD COLUMN yNC4_unit varchar(255),
ADD COLUMN yIC5 float8,
ADD COLUMN yIC5_unit varchar(255),
ADD COLUMN yNC5 float8,
ADD COLUMN yNC5_unit varchar(255),
ADD COLUMN yNC6 float8,
ADD COLUMN yNC6_unit varchar(255),
ADD COLUMN yNitrogen float8,
ADD COLUMN yNitrogen_unit varchar(255);