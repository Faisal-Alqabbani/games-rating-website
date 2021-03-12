import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gameActions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";

function Nav() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(text));
    setText("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <p>YOUR GAME</p>
      </Logo>
      <div className="search">
        <form>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search"
          />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </form>
      </div>
    </StyledNav>
  );
}
const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    &:hover {
      outline: none;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  @media screen and (max-width: 768px) {
    input {
      width: 100%;
    }
    button {
      margin-top: 1rem;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;
