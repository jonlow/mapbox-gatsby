import React from 'react'

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

class LoadExternalScript extends React.Component {
  static defaultProps = {
    onLoad: () => {},
    onError: () => {},
  }

  render() {
    const { props } = this
    if (!canUseDOM) {
      props.onError('DOM not found')
      return false
    }

    if (!document.getElementById(props.id)) {
      const script = document.createElement('script')
      script.src = props.src
      script.id = props.id
      script.onload = props.onLoad
      script.onerror = props.onError

      if (document.body) {
        document.body.appendChild(script)
      }
    } else {
      props.onError('script already loaded')
    }

    return false
  }
}

export default LoadExternalScript
