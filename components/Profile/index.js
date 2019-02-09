// TODO: refactor class to hooks https://codesandbox.io/s/w2rn7nxy65

import React, { Component } from 'react'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops.cjs'
import ProgressiveImage from 'react-progressive-image'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background: radial-gradient(ellipse at center, #eef0f2 0%, #90a2b2 100%); */
`

const CardContainer = styled(animated.div)`
  width: 45ch;
  height: 45ch;
  background: grey;
  border-radius: 5px;
  background-image: url('/static/arm.png');
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  &hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1 // zoom
]
const trans = ([x, y, s]) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

class Profile extends Component {
  state = {
    xys: [0, 0, 1]
  }
  render() {
    return (
      <ProfileContainer>
        <Spring
          native
          config={{ mass: 5, tension: 350, friction: 40 }}
          from={{ transform: trans(this.state.xys) }}
          to={{ transform: trans(this.state.xys) }}
        >
          {props => {
            return (
              <CardContainer
                onMouseMove={({ clientX: x, clientY: y }) =>
                  this.setState({ xys: calc(x, y) })
                }
                onMouseLeave={() => this.setState({ xys: [0, 0, 1] })}
                style={props}
              >
                <ProgressiveImage
                  delay={3000}
                  src="/static/arm.png"
                  placeholder={'/static/arm.png'}
                >
                  {(src, loading) => (
                    <img
                      style={{
                        filter: loading ? 'blur(10px)' : 'none',
                        transition: 'all .1s ease-in'
                      }}
                      width="200"
                      src={src}
                      alt=""
                    />
                  )}
                </ProgressiveImage>
              </CardContainer>
            )
          }}
        </Spring>
      </ProfileContainer>
    )
  }
}

export default Profile

// <img srcset="cute-kitten-320w.jpg 320w,
// 			 cute-kitten-480w.jpg 480w,
// 			 cute-kitten-800w.jpg 800w"

// 	 sizes="(max-width: 320px) 280px
// 			(max-width: 480px) 440px
// 			800px"

//      src="cute-kitten-800w.jpg" alt="A pretty cute kitten" />
