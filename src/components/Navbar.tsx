import React from 'react'
import { NavLink } from 'react-router-dom'
import { TodosPage } from '../pages/TodosPage'
import { AboutPage } from '../pages/AboutPage'
 

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">
            Cases list
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About us
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)