
ALTER TABLE calculation_step
ADD created_date TIMESTAMP;
ALTER TABLE calculation_step
ADD last_modified_date TIMESTAMP;

ALTER TABLE fluid
ADD created_date TIMESTAMP;
ALTER TABLE fluid
ADD last_modified_date TIMESTAMP;

ALTER TABLE ship
ADD created_date TIMESTAMP;
ALTER TABLE ship
ADD last_modified_date TIMESTAMP;

ALTER TABLE standard
ADD created_date TIMESTAMP;
ALTER TABLE standard
ADD last_modified_date TIMESTAMP;

ALTER TABLE transport
ADD created_date TIMESTAMP;
ALTER TABLE transport
ADD last_modified_date TIMESTAMP;