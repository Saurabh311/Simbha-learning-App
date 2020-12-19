package se.kth.sda.simba.assignmentPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/assignmentPost")
public class AssignmentPostController {
    @Autowired
    private AssignmentPostService assignmentPostService;

    //End point to Get all assignments
    @GetMapping("")
    public List<AssignmentPost> getAll() {
            return assignmentPostService.getAll();
    }

    //Get a specific assignment by its id
    @GetMapping("/{id}")
    public AssignmentPost getById(@PathVariable Long id) {
        return assignmentPostService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //Get all assignment by its grade and subject
    @GetMapping("/grade/{grade}/{subject}")
    public List<AssignmentPost> getAllByGradeAndSubject(@PathVariable("grade") String grade, @PathVariable("subject") String subject){
        return assignmentPostService.getAllByGradeAndSubject(grade,subject);
    }

    //Get all assignment by its subject
    @GetMapping("/subject/{subject}")
    public List<AssignmentPost> getAllBySubject(@PathVariable String subject) {
        return assignmentPostService.getAllBySubject(subject);
    }

    //Create an assignment
    @PostMapping("/new")
    public AssignmentPost create(@RequestBody AssignmentPost newAssignmentPost) {
        return assignmentPostService.create(newAssignmentPost);
    }

    //Edit an existing assignment
    @PutMapping("")
    public AssignmentPost update(@RequestBody AssignmentPost newAssignmentPost) {
        return assignmentPostService.update(newAssignmentPost);
    }

    // delete an assignment by its id
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        assignmentPostService.delete(id);
    }
}
