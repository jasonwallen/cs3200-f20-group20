package com.example.myapp2.daos;

import com.example.myapp2.models.Song;
import com.example.myapp2.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SongDao {
    @Autowired
    SongRepository songRepository;
    @GetMapping("/findAllSongs")
    public Iterable<Song> findAllSongs() {
        return songRepository.findAll();
    }
    @GetMapping("/findSongById/{sid}")
    public Song findSongById(
            @PathVariable("sid") Integer sid) {
        return songRepository.findById(sid).get();
    }
    @GetMapping("/createSong")
    public Song createSong() {
        Song song = new Song();
        song.setTitle("New Song");
        song.setArtist("New Song");
        song.setReleaseDate("New Song");
        song.setAlbumTitle("New Song");
        song.setRuntime(-1);
        return songRepository.save(song);
    }
    @GetMapping("/deleteSong/{sid}")
    public void deleteSong(
            @PathVariable("sid") Integer sid) {
        songRepository.deleteById(sid);
    }
    @GetMapping("/renameSong/{sid}/{newTitle}")
    public Song renameSong(
            @PathVariable("sid") Integer sid,
            @PathVariable("newTitle") String newTitle) {
        Song song = songRepository.findById(sid).get();
        song.setTitle(newTitle);
        return songRepository.save(song);
    }
}
