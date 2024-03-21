require('dotenv').config();
const json = require("")
const fs = require("fs")
const {Client} = require("pg");


async function insert (){

    const client = new Client({
        user: process.env.user,
        host: process.env.host,
        database: process.env.db,
        password: process.env.passwd,
        port: process.env.port,
    }); 

    await client.connect()
        .then(() => console.log("Connected successfully"))
    const query_1 = "SELECT * FROM public.songs"

    const res_1 = client.query(query_1).catch(err => console.log(err));

    console.log(res_1.rowCount);

    var new_track_name = ""
    var new_album_name = ""
    var new_artist_name = ""

    for (let i = 0; i < json.length; i++) {

        if(json[i].master_metadata_track_name == null){
            var new_track_name = "null";
        }  
        else{
            var new_track_name = json[i].master_metadata_track_name;
        }

        if(json[i].master_metadata_album_album_name == null){
            var new_album_name = "null";
        }
        else{
            var new_album_name = json[i].master_metadata_album_album_name;
        }

        if(json[i].master_metadata_album_artist_name == null){
            var new_artist_name = "null";
        }
        else{
            var new_artist_name = json[i].master_metadata_album_artist_name;
        }

        if (new_track_name.includes("'") == true) {
            var new_track_name = (json[i].master_metadata_track_name).replace(/'/g, "''");
        }
        else {
            new_track_name = json[i].master_metadata_track_name;
        }

        if (new_album_name.includes("'") == true) {
            var new_album_name = (json[i].master_metadata_album_album_name).replace(/'/g, "''");
        }
        else {
            new_album_name = json[i].master_metadata_album_album_name;
        }

        if (new_artist_name.includes("'") == true) {
            var new_artist_name = (json[i].master_metadata_album_artist_name).replace(/'/g, "''");
        }
        else{
            new_artist_name = json[i].master_metadata_album_artist_name;
        }


        var data = {
            "track_name" : new_track_name,
            "artist_name" : new_artist_name,
            "album_name" : new_album_name,
            "ms_played" : json[i].ms_played,
            "conn_country" : json[i].conn_country,
            "platform" : json[i].platform,
            "timestamp" : json[i].ts,
        }

        const query = 
        `
        INSERT INTO public.songs(
            track_name, artist_name, album_name, ms_played, conn_country, platform, "timestamp")
            VALUES ('${data.track_name}', '${data.artist_name}', '${data.album_name}', ${data.ms_played}, '${data.conn_country}', '${data.platform}', '${data.timestamp}');
        `

        console.log(query);
        const res = await client.query(query);
            
    }

    await client.end();
}
 
insert();

