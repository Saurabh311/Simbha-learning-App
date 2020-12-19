package se.kth.sda.simba.assignmentSubmission;
import se.kth.sda.simba.assignmentPost.AssignmentPost;
import se.kth.sda.simba.user.User;
import javax.persistence.*;

@Entity
public class AssignmentSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String assignmentTitle;
    @Column(columnDefinition = "TEXT")
    private String assignmentDescription;
    private String fileURL;
    private String grade;
    private String subject;
    private String dateSubmitted;
    private String status;
    @Column(columnDefinition = "TEXT")
    private String comments;
    private String reviewedBy;

    @ManyToOne
    private AssignmentPost assignmentPost;

    @ManyToOne
    private User user;

    public AssignmentSubmission(long id, String assignmentTitle, String assignmentDescription, String fileURL, String grade, String subject, String dateSubmitted, String status, String comments, String reviewedBy, AssignmentPost assignmentPost, User user) {
        this.id = id;
        this.assignmentTitle = assignmentTitle;
        this.assignmentDescription = assignmentDescription;
        this.fileURL = fileURL;
        this.grade = grade;
        this.subject = subject;
        this.dateSubmitted = dateSubmitted;
        this.status = status;
        this.comments = comments;
        this.reviewedBy = reviewedBy;
        this.assignmentPost = assignmentPost;
        this.user = user;

    }

    public AssignmentSubmission(String status, String comments, String reviewedBy) {
        this.status = status;
        this.comments = comments;
        this.reviewedBy = reviewedBy;
    }

    public AssignmentSubmission() {

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

    public String getFileURL() {
        return fileURL;
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

    public AssignmentPost getAssignmentPost() {
        return assignmentPost;
    }

    public void setAssignmentPost(AssignmentPost assignmentPost) {
        this.assignmentPost = assignmentPost;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDateSubmitted() {
        return dateSubmitted;
    }

    public void setDateSubmitted(String dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public void setFileURL(String fileURL) {
        this.fileURL = fileURL;
    }

    public String getReviewedBy() {
        return this.reviewedBy;
    }

    public void setReviewedBy(String reviewedBy) {
        this.reviewedBy = reviewedBy;
    }
}
