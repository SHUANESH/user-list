import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("onClickEvent", ()=>{
  it("onclick", ()=>{
    const {queryByTitle} = render(<App/>)
    const getUser = queryByTitle("get-user-button");
    const userInfo = queryByTitle("app-h2-user");
    fireEvent.click(getUser);
    console.log(userInfo);
    expect(userInfo).toBe(`<h2 title="app-h2-user" style={{color: user.status === "active"? "green": "red"}}>{user.name}</h2><h5>{user.status}</h5>`)
  })

  it("Before on click", ()=>{
    const {queryByTitle} = render(<App/>)
    const userInfo = queryByTitle("app");
    expect(userInfo).toBeInTheDocument()
  })

})

describe("onClickEvent", ()=>{

})