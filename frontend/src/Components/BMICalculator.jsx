import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BMICalculator = () => {

  //USE STATE + VARIABLES
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please Enter Valid Details")
      return; //ENDS HERE
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("YOU ARE UNDER WEIGHT");
    }
    else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("YOU ARE NORMAL WEIGHT");
    }
    else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("YOU ARE OVER WEIGHT");
    }
    else {
      toast.error("YOU ARE IN THE OBES RANGE");
    }
  } //FUNCTION FOR BMI WITH IF/ELSEIF/ELSE STATEMENTS

  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (CM)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
            </div>
            <div>
              <label>Weight (KG)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/BMI2.png" alt="bmiImage"/>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator


//FORM FOR DETAILS 
//H TAGS USED / DIV / LABEL / SELECT / BUTTONS / IMG
//CSS CLASSNAME BMI/WRAPPER/CONTAINER USED 