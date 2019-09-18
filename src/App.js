import React from 'react';
import './App.css';
import useForm from 'react-hook-form';

// import Form from './Form'

// function App() {
//   return (
//     <div className="App">
//         <Form />
//     </div>
//   );
// }

function App() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
      name="firstname" 
      ref={register({ required: true })} 
      placeholder={errors.firstname && 'First name is required.'}
      /> {errors.firstname && 'First name is required.'}
      
      <input 
      name="lastname" 
      ref={register({ required: true })} 
      placeholder={errors.lastname && 'Last name is required.'}
      />{errors.lastname && 'Last name is required.'}
      
      <input 
      name="age" 
      ref={register({ pattern: /\d+/ })} 
      placeholder={errors.age && 'Please enter number for age.'}
      />{errors.age && 'Please enter number for age.'}

      <input
      name="email"
      ref={register({
        required: 'Required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "invalid email address"
        }
      })}
      placeholder={errors.email && errors.email.message}
    />{errors.email && errors.email.message}
      
      <input
        name="username"
        ref={register({
          validate: value => value === "admin" || "Nice try!"
        })}
        placeholder={errors.username && errors.username.message}
      />{errors.username && errors.username.message}
      
      <input type="submit" />
    </form>
  );
}

export default App;
