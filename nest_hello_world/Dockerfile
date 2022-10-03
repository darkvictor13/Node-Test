FROM postgres:alpine
ADD database/init.sql /docker-entrypoint-initdb.d
ADD database/insert_data.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*