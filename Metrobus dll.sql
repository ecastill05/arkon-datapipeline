CREATE SCHEMA "estatico";

CREATE TABLE "estatico"."agency_bronze" (
  "agency_id" integer PRIMARY KEY,
  "agency_name" text,
  "agency_url" text,
  "agency_timezone" text,
  "agency_lang" varchar(2),
  "agency_phone" text,
  "agency_fare_url" text,
  "agency_email" text
);

CREATE TABLE "estatico"."calendar_dates_bronze" (
  "service_id" text PRIMARY KEY,
  "date" date,
  "exception_type" integer
);

CREATE TABLE "estatico"."calendar_bronze" (
  "service_id" text PRIMARY KEY,
  "monday" integer,
  "tuesday" integer,
  "wednesday" integer,
  "thursday" integer,
  "friday" integer,
  "saturday" integer,
  "sunday" integer,
  "start_date" date,
  "end_date" date
);

CREATE TABLE "estatico"."feed_info_bronze" (
  "feed_publisher_name" text,
  "feed_publisher_url" text,
  "feed_lang" varchar(2),
  "default_lang" varchar(2),
  "feed_start_date" date,
  "feed_end_date" date,
  "feed_version" integer,
  "feed_contact_email" text,
  "feed_contact_url" text
);

CREATE TABLE "estatico"."routes_bronze" (
  "route_id" integer PRIMARY KEY,
  "agency_id" integer,
  "route_short_name" integer,
  "route_long_name" text,
  "route_desc" text,
  "route_type" integer,
  "route_url" text,
  "route_color" text,
  "route_text_color" text,
  "route_sort_order" text,
  "continuous_pickup" integer,
  "continuous_drop_off" integer
);

CREATE TABLE "estatico"."shapes_bronze" (
  "shape_id" integer,
  "shape_pt_lat" float8,
  "shape_pt_lon" float8,
  "shape_pt_sequence" integer,
  "shape_dist_traveled" float8,
  PRIMARY KEY ("shape_id", "shape_pt_sequence")
);

CREATE TABLE "estatico"."stops_bronze" (
  "stop_id" text PRIMARY KEY,
  "stop_code" text,
  "stop_name" text,
  "stop_desc" text,
  "stop_lat" float8,
  "stop_lon" float8,
  "zone_id" text,
  "stop_url" text,
  "location_type" integer,
  "parent_station" text,
  "stop_timezone" text,
  "wheelchair_boarding" integer,
  "level_id" text,
  "platform_code" text
);

CREATE TABLE "estatico"."stops_silver" (
  "stop_id" text PRIMARY KEY,
  "stop_code" text,
  "stop_name" text,
  "stop_desc" text,
  "stop_lat" float8,
  "stop_lon" float8,
  "zone_id" text,
  "stop_url" text,
  "location_type" integer,
  "parent_station" text,
  "stop_timezone" text,
  "wheelchair_boarding" integer,
  "level_id" text,
  "platform_code" text,
  "closest_alcaldia" text
);

CREATE TABLE "estatico"."trips_bronze" (
  "route_id" integer,
  "service_id" text,
  "trip_id" text PRIMARY KEY,
  "trip_headsign" text,
  "trip_short_name" text,
  "direction_id" integer,
  "block_id" text,
  "shape_id" integer,
  "wheelchair_accessible" text,
  "bikes_allowed" text
);

CREATE TABLE "estatico"."stop_times_bronze" (
  "trip_id" text,
  "arrival_time" text,
  "departure_time" text,
  "stop_id" text,
  "stop_sequence" integer,
  "stop_headsign" text,
  "pickup_type" integer,
  "drop_off_type" integer,
  "continuous_pickup" text,
  "continuous_drop_off" text,
  "shape_dist_traveled" text,
  "timepoint" integer
);

CREATE TABLE "estatico"."alcaldias_bronze" (
  "alcaldia_id" integer,
  "alcaldia_name" text
);

--ALTER TABLE "estatico"."calendar_dates_bronze" ADD FOREIGN KEY ("service_id") REFERENCES "estatico"."calendar_bronze" ("service_id");

ALTER TABLE "estatico"."routes_bronze" ADD FOREIGN KEY ("agency_id") REFERENCES "estatico"."agency_bronze" ("agency_id");

ALTER TABLE "estatico"."stops_silver" ADD FOREIGN KEY ("stop_id") REFERENCES "estatico"."stops_bronze" ("stop_id");

ALTER TABLE "estatico"."trips_bronze" ADD FOREIGN KEY ("route_id") REFERENCES "estatico"."routes_bronze" ("route_id");

ALTER TABLE "estatico"."trips_bronze" ADD FOREIGN KEY ("service_id") REFERENCES "estatico"."calendar_dates_bronze" ("service_id");

ALTER TABLE "estatico"."stop_times_bronze" ADD FOREIGN KEY ("stop_id") REFERENCES "estatico"."stops_bronze" ("stop_id");
