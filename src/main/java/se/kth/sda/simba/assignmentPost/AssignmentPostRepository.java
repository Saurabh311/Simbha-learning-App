package se.kth.sda.simba.assignmentPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AssignmentPostRepository extends JpaRepository<AssignmentPost, Long> {
    List<AssignmentPost> findAllByUserId(Long userId);
    List<AssignmentPost> findAllByGrade(String grade);
    List<AssignmentPost> findAllBySubject(String subject);
    List<AssignmentPost> findAllByGradeAndSubject(String grade, String subject);
}
