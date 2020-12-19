package se.kth.sda.simba.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.simba.Quiz.Quiz;
import se.kth.sda.simba.Quiz.QuizRepo;
import java.util.List;
import java.util.Optional;
@Service
public class QuizService {
    @Autowired
    private QuizRepo repository;
    public List<Quiz> getAll() {
        return repository.findAll();
    }
    public Optional<Quiz> getById(Long id) {
        return repository.findById(id);
    }
    public Optional<Quiz> getBySubject(String subject) {
        return repository.findBySubject(subject);
    }
    public Quiz create(Quiz newQuiz) {
        return repository.save(newQuiz);
    }
    public void delete(Long id) {
        repository.deleteById(id);
    }
    public Quiz update(Quiz updatedQuiz) {
        return repository.save(updatedQuiz);
    }
}