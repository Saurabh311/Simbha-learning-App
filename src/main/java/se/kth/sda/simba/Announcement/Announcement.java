package se.kth.sda.simba.Announcement;

import se.kth.sda.simba.comment.Comment;
import se.kth.sda.simba.user.User;

import javax.persistence.*;
import java.util.List;

/** This Class is a model for announcement object.
 * It contains all the fields and methods to update an announcement.
 * @author
 * @version 1.0
 */

@Entity
public class Announcement {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "announce_generator")
    @SequenceGenerator(name = "announce_generator", sequenceName = "announce_seq")
    private Long id;
    // All fields for announcement
    private String title;
    @Column( columnDefinition = "TEXT")
    private String body;
    private String imageUrl;
    private String date;
    private Integer likes;

    //One announcement can be related to many comments
    @OneToMany(mappedBy ="announcement", cascade = {CascadeType.REMOVE})
    private List<Comment> comments;

    //One user can write many comments
    @ManyToOne
    private User user;

    public Announcement() {
    }

    public Announcement(Long id, String title, String body, String date) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
    }

    /**
     * Getter and setter for all the fields
     */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }
}
