import React from 'react'
import styled from 'styled-components'

const InputBox = styled.div`
  position: relative;
  width: 250px;
  font-size: 16px;

  & input {
    width: 100%;
    background: transparent;
    color: #fff;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 1em;
    letter-spacing: 0.1em;
    padding: 10px 0 5px;
  }

  & input:focus ~ span {
    color: #2196f3;
    transform: translateY(-16px);
    font-size: 0.65em;
  }

  & span {
    position: absolute;
    left: 0;
    padding: 10px 0 5px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    pointer-events: none;
    letter-spacing: 0.1em;
    transition: 0.5s;
  }

  & i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    overflow: hidden;
  }

  & i::before {
    content: '';
    position: absolute;
    width: 100%;
    left: -100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #ff1b69,
      #ff0,
      #2196f3,
      #9c27b0,
      #ff1b69
    );
    animation: animate 2s linear infinite;
    transition: 0.5s;
  }

  & input:focus ~ i::before {
    left: 0;
  }

  @keyframes animate {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: 250px;
    }
  }
`

function TextField() {
  return (
    <InputBox>
      <input type="text" />
      <span>Name</span>
      <i></i>
    </InputBox>
  )
}

export default TextField

// https://www.youtube.com/watch?app=desktop&v=KnYwz3ksW7E&feature=youtu.be&ab_channel=OnlineTutorials
