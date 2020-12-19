package se.kth.sda.simba.Quiz;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda.simba.comment.Comment;
import java.util.Optional;
@Repository
public interface QuizRepo extends JpaRepository<Quiz, Long> {
    Optional<Quiz> findBySubject(String subject);
}