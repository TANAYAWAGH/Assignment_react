import { useState } from "react";

   
const Profile_Form = () => {
  const [profile, setProfile] = useState({
    //profile = State Function
    fullName: "",
    age: "",
    gender: "",
    hobbies: [],
    contactNo: "",
    email: "",
    qualifications: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // event handler to handle full name change event
  const handleFullNameChange = (e) => {
    setProfile({ ...profile, fullName: e.target.value });
  };

  // event handler to handle age change event
  const handleAgeChange = (e) => {
    setProfile({ ...profile, age: e.target.value });
  };

  // event handler to handle hobbies change event
  const handleHobbiesChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setProfile({ ...profile, hobbies: [...profile.hobbies, value] });
    } else {
      setProfile({
        ...profile,
        hobbies: profile.hobbies.filter((item) => item !== value),
      });
    }
  };

  // event handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    setIsSubmitted(true);
  };

  // rendering logic using jsx
  return (
    <>
   

    <div className="mb-3">
        <div className="bg"></div>
    </div>

      {!isSubmitted && (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-lable">Full Name:</label>
              <input
                className="form-control"
                value={profile.fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                className="form-control"
                type="number"
                value={profile.age}
                onChange={handleAgeChange}
                min={12}
                max={50}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="form-check">
                <input
                  id="g1"
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={profile.gender === "male"}
                  onChange={(e) =>
                    setProfile({ ...profile, gender: e.target.value })
                  }
                />
                <label htmlFor="g1" className="form-check-label">
                  Male
                </label>
              </div>

              <div className="form-check">
                <input
                  id="g1"
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={profile.gender === "female"}
                  onChange={(e) =>
                    setProfile({ ...profile, gender: e.target.value })
                  }
                />
                <label htmlFor="g1" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Hobbies</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hb1"
                  name="hobbies"
                  value="singing"
                  checked={profile.hobbies.includes("singing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-check-label" htmlFor="hb1">
                  Singing
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hb2"
                  name="hobbie"
                  value="dancing"
                  checked={profile.hobbies.includes("dancing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-check-label" htmlFor="hb2">
                  Dancing
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hb3"
                  name="hobbie"
                  value="travelling"
                  checked={profile.hobbies.includes("travelling")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-check-label" htmlFor="hb3">
                  Travelling
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="form-label">Contact No</label>
              <input
                className="form-control"
                type="tel"
                id="cn"
                value={profile.contactNo}
                onChange={(e) =>
                  setProfile({ ...profile, contactNo: e.target.value })
                }
                pattern="[0-9]{10}"
                maxLength={10}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                placeholder="abc.xyz@example.com"
                required
              />
            </div>

            <div className="mb-3 ">
              <label className="form-label" htmlFor="qu">
                Educational Qualification:
              </label>
              <select
                required
                className="form-select"
                value={profile.qualifications}
                onChange={(e) =>
                  setProfile({ ...profile, qualifications: e.target.value })
                }
              >
                <option value="">Select Qualification</option>
                <option>B.S.C</option>
                <option>B.Tech</option>
                <option>B.C.A</option>
                <option>B.COM</option>
                <option>B.A</option>
                <option>M.S.C</option>
                <option>M.Tech</option>
                <option>M.C.A</option>
                <option>M.COM</option>
                <option>M.A</option>
              </select>
            </div>

            <div className="mb-3">
              <button className="btn btn-success m-2" type="submit">
                Save
              </button>
              <button
                className="btn btn-secondary m-2"
                type="reset"
                onClick={() =>
                  setProfile({
                    fullName: "",
                    age: "",
                    hobbies: [],
                    contactNo: "",
                    email: "",
                    qualifications: "",
                  })
                }
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div className="container w-50 border border-primary rounded p-2 text-bg-secondary">
          <h2>Full Name: {profile.fullName}</h2>
          <h2>Age: {profile.age}</h2>
          <h2>Gender: {profile.gender}</h2>
          <h2>Hobbies : </h2>
          <ul>
            {profile.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
          <h2>ContactNo: {profile.contactNo}</h2>
          <h2>Email:{profile.email}</h2>
          <h2>Educational Qualifications:{profile.qualifications}</h2>

          <button
            className="btn btn-outline-light my-2"
            onClick={() => {
              setIsSubmitted(false);
              setProfile({
                fullName: "",
                age: "",
                gender: "",
                hobbies: [],
                contactNo: "",
                email: "",
                qualifications: "",
              });
            }}
          >
            Back to form
          </button>
        </div>
        
      )}
      
    </>
  );
};
export default Profile_Form;
