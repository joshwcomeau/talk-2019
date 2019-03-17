import React from 'react'
import { storiesOf } from '@storybook/react'

import StoryWrapper from '../StoryWrapper'
import Tweet from './Tweet'

const StateManager = () => {
  const [isRetweeted, setIsRetweeted] = React.useState(false)
  const [isLiked, setIsLiked] = React.useState(false)

  const [numOfRetweets, setNumOfRetweets] = React.useState(
    Math.round(Math.random() * 100)
  )
  const [numOfLikes, setNumOfLikes] = React.useState(
    Math.round(Math.random() * 1000)
  )

  return (
    <React.Fragment>
      <Tweet
        displayName="Josh ✨"
        username="joshwcomeau"
        avatarSrc="http://placekitten.com/128/128"
        tweetContents="*tap tap* is this thing on? 🎤"
        timestamp={new Date()}
        numOfRetweets={numOfRetweets}
        numOfLikes={numOfLikes}
        isRetweetedByCurrentUser={isRetweeted}
        isLikedByCurrentUser={isLiked}
        handleToggleLike={() => {
          setNumOfLikes(isLiked ? numOfLikes - 1 : numOfLikes + 1)
          setIsLiked(!isLiked)
        }}
        handleToggleRetweet={() => {
          setNumOfRetweets(isRetweeted ? numOfRetweets - 1 : numOfRetweets + 1)
          setIsRetweeted(!isRetweeted)
        }}
      />
      <div style={{ height: 500 }}>Hello</div>
    </React.Fragment>
  )
}

storiesOf('Tweet', module)
  .add('default', () => <Tweet />)
  .add('managed', () => (
    <StoryWrapper>
      <StateManager />
    </StoryWrapper>
  ))
