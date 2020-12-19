package se.kth.sda.simba.assignmentSubmission;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;


@Repository
public interface AssignmentSubmissionRepository extends JpaRepository<AssignmentSubmission, Long> {
    List<AssignmentSubmission> findAllByUserId(Long userId);
    List<AssignmentSubmission> findAllByGrade(String grade);
    List<AssignmentSubmission> findAllBySubject(String subject);
    List<AssignmentSubmission> findAllByAssignmentPostId(Long assignmentPostId);
    List<AssignmentSubmission> findAllByGradeAndSubject(String grade, String subject);
    List<AssignmentSubmission> findAllByUserIdAndAssignmentPostId(Long assignmentPostId,Long userId);
}

