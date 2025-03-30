SELECT 
    artist_name, 
    SUM(ms_played) AS total_ms,
    CONCAT(
        FLOOR(SUM(ms_played) / (1000 * 60 * 60 * 24)), 'd ',
        FLOOR((SUM(ms_played) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 'h ',
        FLOOR((SUM(ms_played) % (1000 * 60 * 60)) / (1000 * 60)), 'm ',
        FLOOR((SUM(ms_played) % (1000 * 60)) / 1000), 's'
    ) AS total_play_time
FROM songs
GROUP BY artist_name
ORDER BY total_ms DESC;