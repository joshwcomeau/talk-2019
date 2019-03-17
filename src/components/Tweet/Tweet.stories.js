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
    <Tweet
      displayName="Josh ✨"
      username="joshwcomeau"
      avatarSrc="http://placekitten.com/128/128"
      tweetContents="Hello world!"
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
  )
}

storiesOf('Tweet', module)
  .add('default', () => <Tweet />)
  .add('managed', () => (
    <StoryWrapper>
      <StateManager />
    </StoryWrapper>
  ))
