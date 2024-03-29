import Api from "./Api";

class CommentApi {
    getAllComments() {
        return Api.get('/comments');
    }

    getAllCommentsByAnnouncementId(announceId) {
        return Api.get(`/comments/announceid?announceId=${announceId}`);
    }

    getCommentById(id) {
        return Api.get('/comments/'+id);
    }

    createComment(post){
        return Api.post('/comments', post);
    }

    updateComment(post) {
        return Api.put('/comments', post);
    }

    deleteComment(id) {
        return Api.delete('/comments/'+id);
    } 
}

export default new CommentApi();