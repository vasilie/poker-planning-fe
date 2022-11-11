import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="login-form form" onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="form__item">
        <label>Username</label>
        <input {...register('username')} className="text-input" placeholder="Type username"/>
        {errors.firstName && <p>First name is required.</p>}
      </div>
      {/* <div className="form__item">
        <label>First Name</label>
        <input {...register('firstName')} className="text-input" placeholder="Type username"/>
        {errors.firstName && <p>First name is required.</p>}
      </div>
      <div className="form__item">
        <label>Last Name</label>
        <input {...register('lastName', { required: true })} className="text-input" />
        {errors.lastName && <p>Last name is required.</p>}
      </div> */}
      <div className="form__item">
        <label>Email</label>
        <input {...register('email', { required: true })} className="text-input" placeholder="Type email"/>
        {errors.email && <p>Email is required.</p>}
      </div>
      
      <input className="button host-buttons card-style-button" type="submit"></input>
    </form>
  );
}

export default Login;