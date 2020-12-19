package se.kth.sda.simba.StudyMaterial;

import se.kth.sda.simba.user.User;

import javax.persistence.*;

@Entity
public class StudyMaterial {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        private String title;
        @Column(columnDefinition = "TEXT")
        private String description;
        private String fileUrl;
        private String grade;
        private String subject;
        private String postDate;


        @ManyToOne
        private User user;


        public StudyMaterial(long id, String title, String description, String fileUrl, String grade, String subject, String postDate, User user) {
            this.id = id;
            this.title = title;

            this.description = description;
            this.fileUrl = fileUrl;
            this.grade = grade;
            this.subject = subject;
            this.postDate = postDate;
            this.user = user;
        }

        public StudyMaterial() {

        }

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
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


}

