CREATE TABLE IF NOT EXISTS public.songs
(
    track_name text COLLATE pg_catalog."default",
    artist_name text COLLATE pg_catalog."default",
    album_name text COLLATE pg_catalog."default",
    ms_played bigint,
    conn_country text COLLATE pg_catalog."default",
    platform text COLLATE pg_catalog."default",
    "timestamp" text COLLATE pg_catalog."default",
    data json
)
