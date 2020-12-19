package se.kth.sda.simba.Quiz;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.simba.Quiz.Quiz;
import se.kth.sda.simba.Quiz.QuizService;
import se.kth.sda.simba.user.User;
import java.util.List;
@RestController
public class QuizController {
    @Autowired
    private QuizService QuizService;
    @GetMapping("/Quizs")
    public List<Quiz> getAll() {
        return QuizService.getAll();
    }
    @GetMapping("/Quizs/{id}")
    public Quiz getById(@PathVariable Long id) {
        return QuizService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/Quizs/{subject}")
    public Quiz getById(@PathVariable String subject) {
        return QuizService.getBySubject(subject)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/Quizs/new")
    public Quiz create(@RequestBody Quiz newQuiz) {
        return QuizService.create(newQuiz);
    }
    @DeleteMapping("/Quizs/{id}")
    public void deleteArticle(@PathVariable Long id) {
        QuizService.delete(id);
    }
    @PutMapping("/Quizs")
    public Quiz update( @RequestBody Quiz updatedQuiz) {
        return QuizService.update(updatedQuiz);
    }
}

