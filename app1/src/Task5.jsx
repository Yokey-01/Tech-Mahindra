const Movie = ({title,year,rating='Not Rated'}) => {
    return (
      <>
        <h2>{title} ({year})</h2>
        <p>Rating: {rating}</p>
      </>
    );
  };
export default Movie

const Button = ({ label }) => {
    return (<button>{label}</button>);
  };

export {Button}
  
  const UserProfile = ({ users }) => {
    return (
      <>
        <h3>{users.name}</h3>
        <p>Email: {users.email}</p>
        <p>Age: {users.age}</p>
      </>
    );
  };
export {UserProfile} 
  const Modal = ({ title, content }) => {
    return (
      <>
        <h2>{title}</h2>
        <p>{content}</p>
      </>
    );
  };
export {Modal}
