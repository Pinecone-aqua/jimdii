import React from "react";

export default function registerGym(): JSX.Element {
  interface FitnessType {
    name: string;
    description: string;
    price: number;
  }

  function submitHandler(e: any) {
    e.preventDefault();
    console.log("Name: ", e.target.name.value);
    console.log("Description: ", e.target.description.value);
    console.log("Price: ", e.target.price.value);
    const newFitness = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
    };
    console.log(newFitness);
    // fetch("http://localhost:3030/fitness/addFitness", {
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    //   body: JSON.stringify(newFitness),
    // });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Name" required />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
          />
        </label>
        <label>
          Price:
          <input type="text" name="price" placeholder="Price" required />
        </label>
        {/* <label>
                   Image: 
                    <input type="file" name="Upload Images" multiple placeholder="Image" required/>
                </label> */}
        <button type="submit">Add New Gym</button>
      </form>
    </div>
  );
}
