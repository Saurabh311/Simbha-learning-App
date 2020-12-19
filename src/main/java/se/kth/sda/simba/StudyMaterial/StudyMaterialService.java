package se.kth.sda.simba.StudyMaterial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.simba.assignmentPost.AssignmentPost;
import se.kth.sda.simba.assignmentPost.AssignmentPostRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudyMaterialService {


        @Autowired
        private StudyMaterialRepo repo;


        public List<StudyMaterial> getAll() {
            return repo.findAll();
        }

        public Optional<StudyMaterial> getById(Long id) {
            return repo.findById(id);
        }

        public List<StudyMaterial> getAllByGrade(String grade){
            return repo.findAllByGrade(grade);
        }

        public List<StudyMaterial> getAllBySubject(String subject){
            return repo.findAllBySubject(subject);
        }

        public List<StudyMaterial> getAllByGradeAndSubject(String grade,String subject){
            return repo.findAllByGradeAndSubject(grade,subject);
        }
        public StudyMaterial create(StudyMaterial newStudyMaterial) {
            return repo.save(newStudyMaterial);
        }

        public StudyMaterial update(StudyMaterial updatedStudyMaterial) {
            return repo.save(updatedStudyMaterial);
        }

        public void delete(Long id) {
            repo.deleteById(id);
        }

        public List<StudyMaterial> getAllByUserId(Long userId) {
            return repo.findAllByUserId(userId);
        }
    }
