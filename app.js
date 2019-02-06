var appId = 'd7ebd50019e802b1f9ee5df661de0ef51a6aa1fdee4ac0d40a4324b37cc55d05';

new Vue({
  el: '#app',
  data: {
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1
  },
  methods: {
    fetchPhotos: function(page) {
      var options = {
        params: {
          client_id: appId,
          page: page,
          per_page: this.perPage
        }
      }
      this.$http.get('https://api.unsplash.com/photos', options)
      .then(function(response) {
        this.photos = response.data
        this.totalPhotos = parseInt(response.headers.get('x-total'))
        this.currentPage = page
      }, console.log)
    }
  },
  created: function() {
    this.fetchPhotos(this.currentPage)
  }
})