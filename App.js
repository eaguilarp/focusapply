import React, { Component } from "react";

class App extends Component 
  {
    constructor(props) 
      {
        super(props);
        this.state = 
          {
            items: [],
            loading: false
          };
      }
    componentDidMount() 
      {
        fetch("https://randomuser.me/api/")
        .then((Response) => Response.json())
        .then((Response) => 
          {
            this.setState(
                {
                  items: Response.results,
                  loading: true
                });
          });
      }
    render() 
      {
        var { items, loading } = this.state;
        if (!loading) 
          {
            return <div>Loading data..</div>;
          } 
        else 
          {
            return(
              <div className="container">
              <h1>Id:</h1>
              {items.map((item) => (
              <h2>{item.id.value}</h2>
              ))}
              <h1>Nombre:</h1>
              {items.map((item) => (
              <h2>{item.name.first}</h2>
              ))}
              <h1>Apellido:</h1>
              {items.map((item) => (
              <h2>{item.name.last}</h2>
              ))}
              <h1>email:</h1>
              {items.map((item) => (
              <h2>{item.email}</h2>
              ))}
              <h1>phone:</h1>
              {items.map((item) => (
              <h2>{item.phone}</h2>
              ))}
              <h1>photo:</h1>
              {items.map((item) => (
              <img src={item.picture.medium} alt={item.name.first} />
              ))}
              </div>
            );
        }
    }
}
export default App;
