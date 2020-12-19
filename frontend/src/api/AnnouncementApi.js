import Api from './Api';

class AnnouncementApi {
  getAllPosts() {
    return Api.get('/announce');
  }

  getPostById(id) {
    return Api.get('/announce/' + id);
  }

  createPost(post) {
    return Api.post('/announce/new', post);
  }

  updatePost(post) {
    return Api.put('/announce/update', post);
  }

  deletePost(id) {
    return Api.delete('/announce/' + id);
  }
}

export default new AnnouncementApi();
