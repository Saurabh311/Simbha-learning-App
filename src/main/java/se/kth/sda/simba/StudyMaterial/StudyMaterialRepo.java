package se.kth.sda.simba.StudyMaterial;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda.simba.assignmentPost.AssignmentPost;

import java.util.List;

@Repository
public interface StudyMaterialRepo extends JpaRepository<StudyMaterial, Long>  {
        List<StudyMaterial> findAllByUserId(Long userId);
        List<StudyMaterial> findAllByGrade(String grade);
        List<StudyMaterial> findAllBySubject(String subject);
        List<StudyMaterial> findAllByGradeAndSubject(String grade, String subject);
}
