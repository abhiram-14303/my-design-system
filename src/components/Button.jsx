import './Button.css'

function Button({ variant = 'primary', size = 'large', state = 'default', children, onClick }) {
  const isAI = variant === 'ai'
  return (
    <button
      className={`btn btn-${variant} btn-${size} btn-${variant}-${state}`}
      disabled={state === 'disabled'}
      onClick={onClick}
    >
      {isAI ? <span className="btn-ai-text">{children}</span> : children}
    </button>
  )
}

export default Button