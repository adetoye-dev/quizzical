import axios from "axios";

const quiz = axios.create({
  baseURL: "https://opentdb.com/api.php",
  params: {
    amount: 5,
    type: "multiple",
  },
});

export default quiz;
