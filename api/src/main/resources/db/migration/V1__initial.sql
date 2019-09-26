create sequence hibernate_sequence start 1 increment 1;
create table calculation
(
    id      int8 not null,
    ship_id int8,
    primary key (id)
);
create table fluid
(
    ethane         float8 not null,
    ethane_unit    varchar(255),
    i_butane       float8 not null,
    i_butane_unit  varchar(255),
    i_pentane      float8 not null,
    i_pentane_unit varchar(255),
    methane        float8 not null,
    methane_unit   varchar(255),
    n_butane       float8 not null,
    n_butane_unit  varchar(255),
    n_hexane       float8 not null,
    n_hexane_unit  varchar(255),
    n_pentane      float8 not null,
    n_pentane_unit varchar(255),
    nitrogen       float8 not null,
    nitrogen_unit  varchar(255),
    propane        float8 not null,
    propane_unit   varchar(255),
    calculation_id int8   not null,
    primary key (calculation_id)
);
create table result_row
(
    id             int8   not null,
    density        float8 not null,
    density_unit   varchar(255),
    energy         float8 not null,
    energy_unit    varchar(255),
    gcv            float8 not null,
    gcv2           float8,
    gcv2_unit      varchar(255),
    gcv_unit       varchar(255),
    temp           float8 not null,
    temp_unit      varchar(255),
    time           float8 not null,
    time_unit      varchar(255),
    volume         float8 not null,
    volume_unit    varchar(255),
    wi             float8 not null,
    wi_unit        varchar(255),
    calculation_id int8,
    primary key (id)
);
create table ship
(
    id      int8 not null,
    country varchar(255),
    name    varchar(255),
    primary key (id)
);
create table standard
(
    combustion_temperature    float8  not null,
    ideal_gas_reference_state boolean not null,
    measurement_temperature   float8  not null,
    calculation_id            int8    not null,
    primary key (calculation_id)
);
create table transport
(
    boil_off_rate  float8 not null,
    from_date      timestamp,
    pressure       float8 not null,
    to_date        timestamp,
    volume         float8 not null,
    calculation_id int8   not null,
    primary key (calculation_id)
);
alter table calculation
    add constraint FK7up3vfa86q2ypyul5etf9v94f foreign key (ship_id) references ship;
alter table fluid
    add constraint FK6thisn2n6sxt7jqljnm8b2bg3 foreign key (calculation_id) references calculation;
alter table result_row
    add constraint FK9mtap61mxjj20s943g3nnvood foreign key (calculation_id) references calculation;
alter table standard
    add constraint FK7sbe0cqi1ja6a152oy53ijp5o foreign key (calculation_id) references calculation;
alter table transport
    add constraint FK1j0nx7mcyhakor5xs5fr94hww foreign key (calculation_id) references calculation;
