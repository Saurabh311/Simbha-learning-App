package se.kth.sda.simba.ChatMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import se.kth.sda.simba.comments.Comment;
//import se.kth.sda.simba.comments.CommentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ChatMessageService {
    @Autowired
    private ChatMessageRepository repo;

    public List<ChatMessage> getAll() {
        return repo.findAll();
    }

    public Optional<ChatMessage> getById(Long id) {
        return repo.findById(id);
    }

    public ChatMessage create(ChatMessage newMessage) {
        return repo.save(newMessage);
    }

    public ChatMessage update(ChatMessage updatedMessage) {
        return repo.save(updatedMessage);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public List<ChatMessage> getAllBySenderId(Long senderId) {
        return repo.findAllBySenderId(senderId);
    }

    public List<ChatMessage> getAllByRecipientId(Long recipientId) {
        return repo.findAllByRecipientId(recipientId);
    }
}
