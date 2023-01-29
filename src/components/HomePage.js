import React from "react";
import blobRight from "../assets/home-blob-right.png";
import blobLeft from "../assets/home-blob-left.png";
import { useUserSelect } from "../contexts/UserSelect";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HomePage = ({ startQuiz }) => {
  const { category, difficulty, setCategory, setDifficulty } = useUserSelect();

  const handleCategoryChange = (input) => {
    setCategory(input);
  };

  const handleDifficultyChange = (input) => {
    setDifficulty(input);
  };

  return (
    <div className="home container">
      <img src={blobRight} className="right-blob" alt="blob" />
      <h1 className="title">Quizzical</h1>
      <h3 className="desc">Quiz questions to test your brain.</h3>
      <label htmlFor="trivia_category" className="input-label">
        Select Category:
      </label>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          name="trivia_category"
          onChange={(e) => handleCategoryChange(e.target.value)}
          displayEmpty
          value={category}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Any Category</MenuItem>
          <MenuItem value="9">General Knowledge</MenuItem>
          <MenuItem value="10">Entertainment: Books</MenuItem>
          <MenuItem value="11">Entertainment: Film</MenuItem>
          <MenuItem value="12">Entertainment: Music</MenuItem>
          <MenuItem value="13">Entertainment: Musicals &amp; Theatres</MenuItem>
          <MenuItem value="14">Entertainment: Television</MenuItem>
          <MenuItem value="15">Entertainment: Video Games</MenuItem>
          <MenuItem value="16">Entertainment: Board Games</MenuItem>
          <MenuItem value="17">Science &amp; Nature</MenuItem>
          <MenuItem value="18">Science: Computers</MenuItem>
          <MenuItem value="19">Science: Mathematics</MenuItem>
          <MenuItem value="20">Mythology</MenuItem>
          <MenuItem value="21">Sports</MenuItem>
          <MenuItem value="22">Geography</MenuItem>
          <MenuItem value="23">History</MenuItem>
          <MenuItem value="24">Politics</MenuItem>
          <MenuItem value="25">Art</MenuItem>
          <MenuItem value="26">Celebrities</MenuItem>
          <MenuItem value="27">Animals</MenuItem>
          <MenuItem value="28">Vehicles</MenuItem>
          <MenuItem value="29">Entertainment: Comics</MenuItem>
          <MenuItem value="30">Science: Gadgets</MenuItem>
          <MenuItem value="31">
            Entertainment: Japanese Anime &amp; Manga
          </MenuItem>
          <MenuItem value="32">
            Entertainment: Cartoon &amp; Animations
          </MenuItem>
        </Select>
      </FormControl>
      <label htmlFor="trivia_difficulty" className="input-label">
        Select Difficulty:
      </label>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          name="trivia_difficulty"
          onChange={(e) => handleDifficultyChange(e.target.value)}
          displayEmpty
          value={difficulty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Any Difficulty</MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <button className="start-quiz" onClick={startQuiz}>
        Start quiz
      </button>
      <img src={blobLeft} className="left-blob" alt="blob" />
    </div>
  );
};

export default HomePage;
