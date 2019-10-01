ALTER TABLE result_row RENAME TO calculation_step;
CREATE UNIQUE INDEX uc_ship
    ON ship (name, country);