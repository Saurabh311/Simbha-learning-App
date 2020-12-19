package se.kth.sda.simba.ChatMessage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import se.kth.sda.simba.comments.Comment;

import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findAllBySenderId(Long senderId);
    List<ChatMessage> findAllByRecipientId(Long recipientId);
}
