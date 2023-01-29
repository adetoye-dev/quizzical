import axios from "axios";

const openTrivia = axios.create({
  baseURL: "https://opentdb.com/api.php",
  params: {
    amount: 10,
    type: "multiple",
  },
});

export default openTrivia;
