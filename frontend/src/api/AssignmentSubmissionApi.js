import Api from "./Api";

class AssignmentSubmissionApi {

    getAllAssignmentsSubmitted() {
        return Api.get('/assignmentSubmittedByStudents');
    }

    getAllSubmittedByAssignmentId(assignmentPostId) {
        return Api.get(`/assignmentSubmittedByStudents/assignmentPostId?assignmentPostId=${assignmentPostId}`);
    }

    getAllSubmittedForAssignmentByUser(assignmentPostId,userId){
        return Api.get(`assignmentSubmittedByStudents/assignmentPostId/user/${assignmentPostId}/${userId}`);

    }

    getAllSubmittedByUserId(userId) {
        return Api.get(`assignmentSubmittedByStudents/userid?userid=${userId}`);
    }

    getAllAssignmentsByGradeAndSubject(grade,subject){
            return Api.get(`/assignmentSubmittedByStudents/grade/${grade}/${subject}`);
    }

    getAssignmentsById(id){
        return Api.get('/assignmentSubmittedByStudents/'+id);
    }

    createAssignment(assignment) {
        return Api.post('/assignmentSubmittedByStudents/new', assignment);
    }

    updateAssignment(updatedAssignmentSubmission) {
        return Api.put('/assignmentSubmittedByStudents/update', updatedAssignmentSubmission);
    }

    deleteAssignment(id) {
        return Api.delete('/assignmentSubmittedByStudents/'+id);
    } 
}

export default new AssignmentSubmissionApi();