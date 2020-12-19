package se.kth.sda.simba.ChatMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class ChatMessageController {

    @Autowired
    private ChatMessageService messageService;

    @GetMapping("/bysender")
    public List<ChatMessage> getAllBySenderId(@RequestParam(required = false) Long senderId) {
        if (senderId == null) {
            return messageService.getAll();
        } else {
            return messageService.getAllBySenderId(senderId);
        }
    }

    @GetMapping("/byrecipient")
    public List<ChatMessage> getAllByRecipientId(@RequestParam(required = false) Long recipientId) {
        if (recipientId == null) {
            System.out.println("Heho");
            return messageService.getAll();
        } else {
            return messageService.getAllByRecipientId(recipientId);
        }
    }

    @GetMapping("")
    public List<ChatMessage> getAll() {
        return messageService.getAll();
    }

    //Get a specific post by its id
    @GetMapping("/{id}")
    public ChatMessage getById(@PathVariable Long id) {
        return messageService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //Create a post
    @PostMapping("")
    public ChatMessage create(@RequestBody ChatMessage newMessage) {
        return messageService.create(newMessage);
    }

    @PutMapping("")
    public ChatMessage update(@RequestBody ChatMessage newMessage) {
        return messageService.update(newMessage);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        messageService.delete(id);
    }


}
