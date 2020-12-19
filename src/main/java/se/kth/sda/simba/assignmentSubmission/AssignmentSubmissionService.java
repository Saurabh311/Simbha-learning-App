package se.kth.sda.simba.assignmentSubmission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.simba.assignmentPost.AssignmentPost;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentSubmissionService {
    
    @Autowired
    private AssignmentSubmissionRepository repo;


    public List<AssignmentSubmission> getAll() {
        return repo.findAll();
    }

    public Optional<AssignmentSubmission> getById(Long id) {
        return repo.findById(id);
    }

    public List<AssignmentSubmission> getAllByGrade(String grade){
        return repo.findAllByGrade(grade);
    }

    public List<AssignmentSubmission> getAllBySubject(String subject){
        return repo.findAllBySubject(subject);
    }

    public AssignmentSubmission create(AssignmentSubmission newAssignmentSubmission) {
        return repo.save(newAssignmentSubmission);
    }

    public AssignmentSubmission update(AssignmentSubmission updatedAssignmentSubmission) {
        return repo.save(updatedAssignmentSubmission);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }


    public List<AssignmentSubmission> getAllByUserId(Long userId) {
        return repo.findAllByUserId(userId);
    }

    public List<AssignmentSubmission> getAllByAssignmentPostId(Long assignmentPostId) {
        return repo.findAllByAssignmentPostId(assignmentPostId);
    }

    public List<AssignmentSubmission> getAllByGradeAndSubject(String grade, String subject) {
        return repo.findAllByGradeAndSubject(grade,subject);
    }
    public List<AssignmentSubmission> getAllByAssignmentPostIdAndUserId(Long assignmentPostId, Long  userId){
        return repo.findAllByUserIdAndAssignmentPostId(assignmentPostId,userId);
    }


}

