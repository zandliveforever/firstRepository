import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return(
    <>
      <h1>Info page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia qui veritatis laboriosam distinctio eius pariatur quia vitae impedit! Autem, quia.</p>
      <button className="btn" onClick={() => history.push('/')}>Back</button>
    </>
  )
}