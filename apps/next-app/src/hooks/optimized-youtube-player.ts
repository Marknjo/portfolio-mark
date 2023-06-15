/* eslint-disable import/no-extraneous-dependencies */
/**
 * @typedef options
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 * @param {Number} width
 * @param {Number} height
 * @param {String} videoId
 * @param {Object} playerVars
 * @param {Object} events
 */

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param {YT.Player|HTMLElement|String} elementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param {YouTubePlayer~options} options See `options` (Ignored when using an existing YT.Player instance).
 * @param {boolean} strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 * @returns {Object}
 */
import YouTubePlayer from 'youtube-player'

import { RefObject, useEffect, useState } from 'react'

/**
 *
 *  Helper hook to load YouTube Videos lazily
 *  - Great for performance boost to reduce page loads
 *  - Loads page on intersection
 *  - Depends on Youtube-Player package to watch on youtube video ready event
 *   - Also depends on intersection observer to start loading video 200px before they are loaded
 *
 *  @see https://github.com/gajus/youtube-player#readme
 *
 * @param imgRef Image loader ref to be replaced with YouTube Iframe
 * @param videoPlayerId YouTube video player
 * @param videoPlayerRootId Id of the hidden element that will be referenced to inject the YouTube Video
 * @returns  YouTube video loading status true | false
 */
export function useOptimizedYoutubePlayer(
  imgRef: RefObject<HTMLImageElement>,
  videoPlayerId: string,
  videoPlayerRootId: string,
) {
  const [isLoadingPlayer, setIsLoadingPlayer] = useState(true)

  useEffect(() => {
    const iframeEl = document.getElementById('about-video')
    const loaderImg = imgRef.current

    async function loadVideo(videoId: string, videoRootId: string) {
      const player = YouTubePlayer(videoRootId, {
        videoId,
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
        },
        host: 'https://www.youtube.com',
      })

      await player.playVideo()

      player.on('ready', () => {
        setIsLoadingPlayer(false)
      })

      await player.stopVideo()
    }

    function lazyLoadYouTubePlayer() {
      /// don't load the player
      if (!loaderImg) return

      /// process the image
      const loadPlayer = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver,
      ) => {
        const [entry] = entries

        if (!entry.isIntersecting) return

        loadVideo(videoPlayerId, videoPlayerRootId)

        /// add the player src to the iframe
        if (!isLoadingPlayer) {
          // stop observing the image
          observer.unobserve(entry.target)
        }
      }

      const playerLoaderObserver = new IntersectionObserver(loadPlayer, {
        root: null,
        threshold: 0,
        rootMargin: '200px',
      })

      playerLoaderObserver.observe(loaderImg)
    }

    if (iframeEl?.nodeName === 'DIV') {
      console.log(iframeEl?.nodeName)

      /// initialize youtube loader
      lazyLoadYouTubePlayer()
    }
  }, [imgRef, isLoadingPlayer, videoPlayerId, videoPlayerRootId])

  return {
    isLoadingPlayer,
  }
}
