const Film = require('../film');
const assert = require('assert');

describe('Film', function () {
  let film;

  beforeEach(function () {
    film = new Film({
      title: "Titanic",
      genres: ["Drama"]
    });
  });

  it('should have title titanic', function () {
    assert.equal(film.title, "Titanic");
  });

  it('should have a review', function(){
    film.addReview({
      comment: "There was room for two on that bit of wood!",
      rating: 10,
      author: "Val"
    });
    assert.equal(film.reviews.length, 1);
  })

})
