package se.kth.sda.simba.assignmentPost;

import se.kth.sda.simba.user.User;
import javax.persistence.*;

@Entity
public class AssignmentPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String assignmentTitle;
   @Column(columnDefinition = "TEXT")
    private String assignmentDescription;
    private String fileUrl;
    private String grade;
    private String subject;
    private String postDate;
    private String submissionDate;

    @ManyToOne
    private User user;

    public AssignmentPost(long id, String assignmentTitle, String assignmentDescription, String fileUrl, String grade, String subject, String postDate, String submissionDate, User user) {
        this.id = id;
        this.assignmentTitle = assignmentTitle;
        this.assignmentDescription = assignmentDescription;
        this.fileUrl = fileUrl;
        this.grade = grade;
        this.subject = subject;
        this.postDate = postDate;
        this.submissionDate = submissionDate;
        this.user = user;
    }

    public AssignmentPost() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAssignmentTitle() {
        return assignmentTitle;
    }

    public void setAssignmentTitle(String assignmentTitle) {
        this.assignmentTitle = assignmentTitle;
    }

    public String getAssignmentDescription() {
        return assignmentDescription;
    }

    public void setAssignmentDescription(String assignmentDescription) {
        this.assignmentDescription = assignmentDescription;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) {
        this.postDate = postDate;
    }

    public String getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(String submissionDate) {
        this.submissionDate = submissionDate;
    }
}
