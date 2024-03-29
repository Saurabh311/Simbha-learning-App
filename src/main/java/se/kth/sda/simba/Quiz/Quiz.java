package se.kth.sda.simba.Quiz;


import javax.persistence.*;
import se.kth.sda.simba.user.User;
@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String Q;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String subject;
    private String correctanswer;
    private String postedby;

    @ManyToOne
    private User user;

    public String getCorrectanswer() {
        return correctanswer;
    }
    public void setCorrectanswer(String correctanswer) {
        this.correctanswer = correctanswer;
    }
    public Quiz() {
    }

    public Quiz(Long id, String Q, String subject, String option1, String option2, String option3, String option4, User user, String correctanswer) {
        this.id = id;
        this.Q = Q;
        this.subject = subject;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.correctanswer = correctanswer;
        this.user = user;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getOption1() {
        return option1;
    }
    public void setOption1(String option1) {
        this.option1 = option1;
    }
    public String getOption2() {
        return option2;
    }
    public void setOption2(String option2) {
        this.option2 = option2;
    }
    public String getOption3() {
        return option3;
    }
    public void setOption3(String option3) {
        this.option3 = option3;
    }
    public String getOption4() {
        return option4;
    }
    public void setOption4(String option4) {
        this.option4 = option4;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public String getPostedby() {
        return postedby;
    }
    public void setPostedby(String postedby) {
        this.postedby = postedby;
    }
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    public String getQ() {
        return Q;
    }
    public void setQ(String Q) {
        this.Q = Q;
    }
}





