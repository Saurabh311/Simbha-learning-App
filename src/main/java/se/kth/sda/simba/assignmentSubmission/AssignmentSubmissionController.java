package se.kth.sda.simba.assignmentSubmission;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import se.kth.sda.simba.assignmentPost.AssignmentPost;
import se.kth.sda.simba.assignmentSubmission.AssignmentSubmissionService;

import java.util.List;
@RestController
@RequestMapping("/assignmentSubmittedByStudents")
public class AssignmentSubmissionController {

    @Autowired
    private AssignmentSubmissionService assignmentSubmissionService;

    //get all submitted assignment
    @GetMapping("")
    public List<AssignmentSubmission> getAll(){
        return assignmentSubmissionService.getAll();
    }

    //get all submitted assignment for a particular post
    @GetMapping("/assignmentPostId")
    public List<AssignmentSubmission> getAllByAssignmentPostId(@RequestParam(required = false) Long assignmentPostId) {
        if (assignmentPostId == null) {
            return assignmentSubmissionService.getAll();
        } else {
            return assignmentSubmissionService.getAllByAssignmentPostId(assignmentPostId);
        }
    }
     //get by grade and subject
    @GetMapping("/grade/{grade}/{subject}")
    public List<AssignmentSubmission> getAllByGradeAndSubject(@PathVariable("grade") String grade, @PathVariable("subject") String subject){
        return assignmentSubmissionService.getAllByGradeAndSubject(grade,subject);
    }

    //get assignments submitted by a particular user for particualr assignment
    @GetMapping("/assignmentPostId/user/{assignmentPostId}/{userId}")
    public List<AssignmentSubmission> getAllSubmittedForAssignmentByUser(@PathVariable("assignmentPostId") Long assignmentPostId, @PathVariable("userId") Long userId){
        return assignmentSubmissionService.getAllByAssignmentPostIdAndUserId(assignmentPostId,userId);
    }

    //get all submitted by particular user
    @GetMapping("/userid")
    public List<AssignmentSubmission> getAllByUserId(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return assignmentSubmissionService.getAll();
        } else {
            return assignmentSubmissionService.getAllByUserId(userId);
        }
    }

    //Get a specific assignment by its id
    @GetMapping("/{id}")
    public AssignmentSubmission getById(@PathVariable Long id) {
        return assignmentSubmissionService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //get all for particular grade
    @GetMapping("/grade/{grade}")
    public List<AssignmentSubmission> getAllByGrade(@PathVariable String grade) {
        return assignmentSubmissionService.getAllByGrade(grade);
    }

    //get all by particular subject
    @GetMapping("/subject/{subject}")
    public List<AssignmentSubmission> getAllBySubject(@PathVariable String subject) {
        return assignmentSubmissionService.getAllBySubject(subject);
    }

    //Create an assignment submission
    @PostMapping("/new")
    public AssignmentSubmission create(@RequestBody AssignmentSubmission newAssignmentSubmission) {
        return assignmentSubmissionService.create(newAssignmentSubmission);
    }

    //update an existing submission
    @PutMapping("/update")
    public AssignmentSubmission update(@RequestBody AssignmentSubmission updatedAssignmentSubmission) {
        return assignmentSubmissionService.update(updatedAssignmentSubmission);
    }

    //delete an assignment submission by its id
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        assignmentSubmissionService.delete(id);
    }
}

