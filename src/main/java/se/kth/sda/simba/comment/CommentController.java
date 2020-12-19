package se.kth.sda.simba.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping("/comments")
    public List<Comment> getAll() {
        return commentService.getAll();
    }

    @GetMapping("/comments/announceid")
    public List<Comment> getAllCommentsByAnnounceId(@RequestParam Long announceId) {



            return commentService.getAllCommentsByAnnounceId(announceId);

    }


    @GetMapping("/comments/{id}")
    public Comment getById(@PathVariable Long id) {
        return commentService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/comments")
    public Comment create(@RequestBody Comment newComment) {

        return commentService.create(newComment);
    }

    @DeleteMapping("/comments/{id}")
    public void deleteArticle(@PathVariable Long id) {
        commentService.delete(id);
    }


    @PutMapping("/comments")
    public Comment update( @RequestBody Comment updatedComment) {
        return commentService.update(updatedComment);
    }

}

