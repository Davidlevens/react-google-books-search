import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  },
  getBooks: function() {
    return axios("/api/books");
  },
  saveBook: function(id) {
    return axios.post("/api/books" + id);
  },
  deleteBook: function(id) {
    return axios.delete("api/books/" + id)
  }
};
