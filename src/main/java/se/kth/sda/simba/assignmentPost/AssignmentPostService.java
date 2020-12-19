package se.kth.sda.simba.assignmentPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentPostService {
    @Autowired
    private AssignmentPostRepository repo;


    public List<AssignmentPost> getAll() {
        return repo.findAll();
    }

    public Optional<AssignmentPost> getById(Long id) {
        return repo.findById(id);
    }

    public List<AssignmentPost> getAllByGrade(String grade){
        return repo.findAllByGrade(grade);
    }

    public List<AssignmentPost> getAllBySubject(String subject){
        return repo.findAllBySubject(subject);
    }

    public List<AssignmentPost> getAllByGradeAndSubject(String grade,String subject){
        return repo.findAllByGradeAndSubject(grade,subject);
    }
    public AssignmentPost create(AssignmentPost newAssignmentPost) {
        return repo.save(newAssignmentPost);
    }

    public AssignmentPost update(AssignmentPost updatedAssignmentPost) {
        return repo.save(updatedAssignmentPost);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }


    public List<AssignmentPost> getAllByUserId(Long userId) {
        return repo.findAllByUserId(userId);
    }
}
