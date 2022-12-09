import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Social App</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fugit quo impedit, voluptatum cupiditate a enim consequuntur quas, aliquid cum voluptate quibusdam tenetur nam iure eius provident officiis id delectus.
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register