#!/bin/bash
set -e

# create the db 
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE $DB;
EOSQL