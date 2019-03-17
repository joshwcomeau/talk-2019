import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  tweetContents: PropTypes.string.isRequired,
  // timestamp: PropTypes.date.isRequired,
  numRetweets: PropTypes.number.isRequired,
  numLikes: PropTypes.number.isRequired,
  isLikedByCurrentUser: PropTypes.bool.isRequired,
}

const Tweet = ({
  displayName,
  username,
  avatarSrc,
  tweetContents,
  timestamp,
  numRetweets,
  numLikes,
  isLikedByCurrentUser,
}) => {
  return <Wrapper>Stuff</Wrapper>
}

const Wrapper = styled.div`
  background: white;
`

Tweet.propTypes = propTypes

export default Tweet
