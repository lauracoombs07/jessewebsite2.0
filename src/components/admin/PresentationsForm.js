import React, { Component } from "react";

class PresentationsForm extends Component {
  //'this.' would be the same as saying 'PresentationsForm.'. state is an object
  state = {
    id: "",
    presenter: "",
    year: "",
    title: "",
    description: "",
    location: "",
    list: [],
    searchId: ""
  };
 
  handleSubmit = async e => {
    
    e.preventDefault(); //puts in in the omnibar/address bar and refreshes page
    const data = JSON.stringify({ ...this.state }); //spread syntax...take object from the form and making it a json string
    await fetch("http://localhost:4000/presentations", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json" //sending json instead of object. where it's going and what kind
      }
    });
    await this.getPresenters()
  };

//   handleSearchId = async (e, _id) => {
//     alert("FIND ONE id");
//     e.preventDefault(); //
//     const searchId = JSON.stringify({ ...this.state });
//     await fetch("http://localhost:4000/presentations/:" + _id, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(results => {
//         return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
//       })
//       .then(data => {
//         this.setState({
//           //id, presenter: , year, title, description, location
//           //putting it into state so we can access it. using it in map at bottom
//           // list: searchId //only getting list [] from db
//         }); //runs console log before set state. if we put it here, it forces th console log to run right where we want
//       });
//   };

  handleUpdateItem = async (e, _id) => {
    
    e.preventDefault();
    await fetch("http://localhost:4000/presentations/" + _id, {
      method: "PUT",
      body: ""
    });
    await this.getPresenters()
  }; //attach + _id to the end of the URL and in handleOnClick(e, _id)

  handleDeleteItem = async (_id) => {
    
    await fetch("http://localhost:4000/presentations/" + _id, {
      method: "DELETE"
    });
    await this.getPresenters()
};


getPresenters = async () => {
    await fetch("http://localhost:4000/presentations", {
        // mode: "cors", may or may not need it...mike did it here in his because he didn't have access to third party api
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(results => {
          return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
        })
        .then(data => {
            
          this.setState({list: data}); 
        });
      }

  async componentWillMount() {
      await this.getPresenters()
  }
   


  render() {
    const presentations = this.state.list;

    // console.log(presentations)  this can go anywhere outside of the scope inside of the class
    return (
      <div className="Presentations">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPresenter">Presenter(s)</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPresenter"
              placeholder="Presenter(s)"
              onChange={e => this.setState({ presenter: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputYear">Year</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputYear"
              placeholder="Year"
              onChange={e => this.setState({ year: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTitle"
              placeholder="Title"
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription"
              placeholder="Description"
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLocation"
              placeholder="Location"
              onChange={e => this.setState({ location: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <hr />
        <form>
          <div className="form-search">
            <label htmlFor="exampleInputID" />
            <input
              type="text"
              className="form-control"
              id="presentationId"
              aria-describedby="id"
              placeholder="Search by Id"
              onChange={e => this.setState({ searchId: e.target.value })}
            />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          {/* <button onClick={() => this.handleSearchId( presentation._id)}>
              {" "}
              Find One{" "}
            </button> */}
        </form>
        <hr />
            {presentations.map(presentation => (
                <div key={presentation._id}>presenter: {presentation.presenter}
                    <br />
                    Year: {presentation.year}
                    <br />
                    Title: {presentation.title}
                    <br />
                    Location: {presentation.location}
                    <br />
                    Description: {presentation.description}
                    <br />
                    id: {presentation._id}
            
            <button onClick={e => this.handleUpdateItem(e, presentation._id)}>
              {" "}
              Edit{" "}
            </button>
            <button onClick={() => this.handleDeleteItem(presentation._id)}>
              {" "}
              X{" "}
            </button>
            <hr />

          </div>
        ))}
      </div>
    );
  }
  //event when event happens =>this.handleClick() calling a function
}

export default PresentationsForm;
