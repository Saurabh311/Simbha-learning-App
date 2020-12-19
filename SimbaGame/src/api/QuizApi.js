import Api from './Api';
class QuizApi {

    getAllQuizs() {
        return Api.get('/Quizs');
    }
    getQuizById(id) {
        return Api.get('/Quizs/'+id);
    }
    getQuizBySubject(subject) {
        return Api.get('/Quizs/'+subject);
    }
    createQuiz(quiz) {
        return Api.post('/Quizs/new', quiz);
    }
   
    updateQuiz(quiz) {
        return Api.put('/Quizs', quiz);
    }
    deleteQuiz(id) {
        return Api.delete('/Quizs/'+id);
    }
}
export default new QuizApi();
