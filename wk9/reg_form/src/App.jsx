import { useState } from 'react';
import './App.css';

function App() {
  const [textInputs, setTextInputs] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    stateProvince: "",
    country: "",
    favoriteColors: []
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: ""
  });

  function handleTextChange(evt) {
    setTextInputs(previousTextInputs => {
      return {
        ...previousTextInputs,
        [evt.target.name]: evt.target.value
      };
    });
  }

  const [colors, setColors] = useState([]);
  function handleCheckbox(event) {
    console.log(event.target.id);
    if(colors.includes(event.target.id)) {
      setColors(colors.filter((color) => {
        return color !== event.target.id;
      }))
    } else {
      setColors([...colors, event.target.id])
    }
  }

  function validateInputs() {
    const newErrors = {};

    if (!textInputs.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    } else if (textInputs.firstName.length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters.";
    }

    if (!textInputs.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
    } else if (textInputs.lastName.length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!validateInputs()) {
      return; 
    }

    console.log("Text Inputs: ", textInputs);
    console.log("Favorite Colors: ", colors);
  };

  return (
    <div>
      <h1>Alpaca Fan Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Registration Form</legend>

          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={textInputs.firstName}
              onChange={handleTextChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={textInputs.lastName}
              onChange={handleTextChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              id="streetAddress"
              type="text"
              name="streetAddress"
              value={textInputs.streetAddress}
              onChange={handleTextChange}
            />
          </div>

          <div>
            <label htmlFor="stateProvince">State/Province</label>
            <input
              id="stateProvince"
              type="text"
              name="stateProvince"
              value={textInputs.stateProvince}
              onChange={handleTextChange}
            />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              name="country"
              value={textInputs.country}
              onChange={handleTextChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Favorite Alpaca Colors</legend>
          <label htmlFor="white"> White
            <input
              type="checkbox"
              name="colors"
              id="white"
              value={colors.includes("white")}
              onChange={handleCheckbox}
            />
          </label>

          <label htmlFor="brown"> Brown
            <input
              type="checkbox"
              name="colors"
              id="brown"
              value={colors.includes("brown")}
              onChange={handleCheckbox}
            />
          </label>

          <label htmlFor="black"> Black
            <input
              type="checkbox"
              name="colors"
              id="black"
              value={colors.includes("black")}
              onChange={handleCheckbox}
            />
          </label>

          <label htmlFor="gray"> Gray
            <input
              type="checkbox"
              name="colors"
              id="gray"
              value={colors.includes("gray")}
              onChange={handleCheckbox}
            />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Your Submitted Information:</h2>
        <p><strong>First Name:</strong> {textInputs.firstName}</p>
        <p><strong>Last Name:</strong> {textInputs.lastName}</p>
        <p><strong>Street Address:</strong> {textInputs.streetAddress}</p>
        <p><strong>State/Province:</strong> {textInputs.stateProvince}</p>
        <p><strong>Country:</strong> {textInputs.country}</p>
        <p><strong>Favorite Alpaca Colors:</strong> {colors.join(', ')}</p>
      </div>

    </div>
  );
}

export default App;
