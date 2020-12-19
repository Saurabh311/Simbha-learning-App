package se.kth.sda.simba.comment;

import se.kth.sda.simba.Announcement.Announcement;
import se.kth.sda.simba.user.User;

import javax.persistence.*;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "body")
    private String body;

   // @Column(name = "author_name")
    // private String authorName;

    @ManyToOne
    private User user;


    @ManyToOne
    private Announcement announcement;

    public Comment() {
    }

    public Comment(Long id, String body, User user, Announcement announcement) {
        this.id = id;
        this.body = body;
        this.user = user;
        this.announcement = announcement;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    /*public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }*/

    public Announcement getAnnouncement() {
        return announcement;
    }

    public void setAnnouncement(Announcement announcement) {
        this.announcement = announcement;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

