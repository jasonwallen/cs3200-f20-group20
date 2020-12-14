package com.example.myapp2.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;

@Entity
@Table(name="playlists")
public class Playlist {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  @Column(name="id")
  private Integer id;
  private String title;
  private Integer playlistCreatorId;
  private Integer playlistListenerId;

  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public Integer getPlaylistCreatorId() {
    return playlistCreatorId;
  }
  public void setPlaylist_creator_id(int playlistCreatorId) {
    this.playlistCreatorId = playlistCreatorId;
  }
  public void setPlaylist_listener_id(int playlistListenerId) {
    this.playlistListenerId = playlistListenerId;
  }
  public Integer getPlaylistListenerId() {
    return playlistListenerId;
  }



/*  public Playlist() {    }
  public Playlist(Integer id, String title, Integer playlist_creator_id,
      Integer playlist_listener_id) {
    this.id = id;
    this.title = title;
    this.playlistCreatorId = playlist_creator_id;
    this.playlistListenerId = playlist_listener_id;
  }
  public String toString() {
    return id + ", " + title + ", " + playlistCreatorId
        + ", " + playlistListenerId;
  }

 */
}
