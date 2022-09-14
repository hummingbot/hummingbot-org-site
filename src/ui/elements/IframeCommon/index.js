import React, {
  useRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from "react"
import PropTypes from "prop-types"

const defaultAttributes = {
  allowFullScreen: false,
  frameBorder: 0,
}

const IframeComm = forwardRef((props, ref) => {
  const _frame = useRef()
  const { attributes, targetOrigin, handleReady, handleReceiveMessage } = props
  const mergedAttributes = Object.assign({}, defaultAttributes, attributes)

  useEffect(() => {
    window.addEventListener("message", onReceiveMessage)
    _frame.current.addEventListener("load", onLoad)
    return () => {
      window.removeEventListener("message", onReceiveMessage, false)
    }
  })

  useImperativeHandle(ref, () => ({
    sendMessage(postMessageData) {
      _frame?.current.contentWindow.postMessage(postMessageData, targetOrigin)
    },
  }))

  const onLoad = () => {
    if (handleReady) {
      handleReady()
    }
  }

  const onReceiveMessage = event => {
    if (handleReceiveMessage) {
      try {
        if (event.data.status === "deploymentError") {
          handleReceiveMessage({
            status: false,
            text: JSON.stringify(event.data.errors).replaceAll(
              /[\[\]"\\,]/g, // eslint-disable-line
              ""
            ),
          })
        } else if (event.data.status === "siteDeployed") {
          handleReceiveMessage({
            status: true,
            text: event.data.html_content.match(
              /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/
            )[1],
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return <iframe ref={_frame} {...mergedAttributes} /> // eslint-disable-line
})

IframeComm.defaultProps = {
  serializeMessage: true,
  targetOrigin: "*",
  postMessageData: "",
}

IframeComm.propTypes = {
  attributes: PropTypes.shape({
    allowFullScreen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    frameBorder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    scrolling: PropTypes.string,
    // https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/
    sandbox: PropTypes.string,
    srcDoc: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  handleReceiveMessage: PropTypes.func,
  handleReady: PropTypes.func,
  serializeMessage: PropTypes.bool,
  targetOrigin: PropTypes.string,
}

export default IframeComm
