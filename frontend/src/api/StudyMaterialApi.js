import Api from "./Api";

class StudyMaterialApi {
    getAllStudyMaterial() {
        return Api.get('/studymaterial');
    }

    getAllStudyMaterialByGradeAndSubject(grade,subject){
            return Api.get(`/studymaterial/grade/${grade}/${subject}`);
    }

    getStudyMaterialById(id){
        return Api.get('/studymaterial/'+id);
    }

    createStudyMaterial(material) {
        return Api.post('/studymaterial/new', material);
    }

    updateStudyMaterial(material) {
        return Api.put('/studymaterial', material);
    }

    deleteStudyMaterial(id) {
        return Api.delete('/studymaterial/'+id);
    } 
}

export default new StudyMaterialApi;