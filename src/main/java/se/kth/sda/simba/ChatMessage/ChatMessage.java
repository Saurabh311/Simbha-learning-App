package se.kth.sda.simba.ChatMessage;

import se.kth.sda.simba.user.User;

import javax.persistence.*;

@Entity
public class ChatMessage {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String msgBody;

    @Column(columnDefinition = "TEXT")
    private String msgSubject;

    @ManyToOne
    private User sender;

    @ManyToOne
    private User recipient;

    @Column(name = "readbysender")
    private Boolean readBySender;

    @Column(name = "readbyrecipient")
    private Boolean readByRecipient;

    private String fileUrl;

    private String date;
    public ChatMessage() {
    }

    public ChatMessage(Long id, String msgBody, String msgSubject,String date) {
        this.id = id;
        this.msgBody = msgBody;
        this.msgSubject = msgSubject;
        this.readBySender = false;
        this.readByRecipient = false;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMsgBody() {
        return msgBody;
    }

    public void setMsgBody(String msgBody) {
        this.msgBody = msgBody;
    }

    public String getMsgSubject() {
        return msgSubject;
    }

    public void setMsgSubject(String msgSubject) {
        this.msgSubject = msgSubject;
    }

    public User getSender() {
        return this.sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public User getRecipient() {
        return this.recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }

    public Boolean getReadByRecipient() {
        return this.readByRecipient;
    }

    public void setReadByRecipient(Boolean read) {
        this.readByRecipient = read;
    }

    public Boolean getReadBySender() {
        return this.readBySender;
    }

    public void setReadBySender(Boolean read) {
        this.readBySender = read;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
