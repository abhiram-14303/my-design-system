import './Button.css'

function Button({ variant = 'primary', size = 'large', state = 'default', children, onClick }) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} btn-${variant}-${state}`}
      disabled={state === 'disabled'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button