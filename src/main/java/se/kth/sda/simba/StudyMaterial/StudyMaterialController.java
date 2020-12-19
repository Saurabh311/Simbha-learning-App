package se.kth.sda.simba.StudyMaterial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;

@RestController
@RequestMapping("/studymaterial")
public class StudyMaterialController {



        @Autowired
        private StudyMaterialService studyMaterialService;

        @GetMapping("")
        public List<StudyMaterial> getAll() {
            return studyMaterialService.getAll();
        }

        //Get a specific assignment by its id
        @GetMapping("/{id}")
        public StudyMaterial getById(@PathVariable Long id) {
            return studyMaterialService.getById(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        }

    /*@GetMapping("/grade/{grade}")
    public List<StudyMaterial> getAllByGrade(@PathVariable String grade) {
        return studyMaterialService.getAllByGrade(grade);
    }*/

        @GetMapping("/grade/{grade}/{subject}")
        public List<StudyMaterial> getAllByGradeAndSubject(@PathVariable("grade") String grade, @PathVariable("subject") String subject){
            return studyMaterialService.getAllByGradeAndSubject(grade,subject);
        }

        @GetMapping("/subject/{subject}")
        public List<StudyMaterial> getAllBySubject(@PathVariable String subject) {
            return studyMaterialService.getAllBySubject(subject);
        }

        //Filter

        //Create a assignment
        @PostMapping("/new")
        public StudyMaterial create(@RequestBody StudyMaterial newStudyMaterial) {
            return studyMaterialService.create(newStudyMaterial);
        }

        //Create a task
        @PutMapping("")
        public StudyMaterial update(@RequestBody StudyMaterial newStudyMaterial) {
            return studyMaterialService.update(newStudyMaterial);
        }

        @DeleteMapping("/{id}")
        public void delete(@PathVariable Long id) {
            studyMaterialService.delete(id);
        }
    }

