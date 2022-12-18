import { useState } from "react";

const App = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [all, setall] = useState([]);

  const dates = new Date().toLocaleTimeString();
  const [date, setdate] = useState(dates);

  const Names = () => {
    const namesss = new Date().toLocaleTimeString();
    setdate(namesss);
  };

  setInterval(Names, setdate);

  const Submit = (e) => {
    if (email && pass) {
      e.preventDefault();
      const names = { id: new Date().getTime().toString(), email, pass };
      setall([...all, names]);
      setemail("");
      setpass("");
      alert(`your email is ${email} and your password is ${pass}`);
    } else {
      alert(`please enter data`);
    }
  };
  return (
    <>
      <form action="" className="form-control border p-5" onSubmit={Submit}>
        <center>
          <h1>{date}</h1>
        </center>

        <br />

        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          onChange={(e) => setpass(e.target.value)}
        />
        <br />
        <button className="btn btn-success">Submit</button>
      </form>

      <div className="bg bg-success">
        {all.map((names) => {
          const { id, email, pass } = names;
          return (
            <>
              <div key={id}>
                <p className="text-white">{email}</p>
                <p className="text-white">{pass}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default App;
