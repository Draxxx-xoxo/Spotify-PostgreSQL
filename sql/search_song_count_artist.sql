SELECT artist_name, COUNT(*) AS song_count
FROM songs
WHERE artist_name = ''
GROUP BY artist_name;