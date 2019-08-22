import React from 'react'

import Tweet from './Tweet'

const TweetManaged = ({ tweetContents }) => {
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
      tweetContents={tweetContents}
      displayName="Josh ✨"
      username="joshwcomeau"
      avatarSrc="http://placekitten.com/128/128"
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

export default TweetManaged
