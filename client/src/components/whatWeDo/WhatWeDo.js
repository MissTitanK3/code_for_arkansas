import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Card, CardWrapper } from '../../Styles';

export default function WhatWeDo() {
  return (
    <CardWrapper>
      <h2>What we do!</h2>
      <ul>
        <li>
          <Card>
            <h3>Consult&nbsp;&nbsp;&nbsp;<FaIcons.FaHandshake size='7em' /></h3>
            <p>When you have an idea, let us know and we will organize a meeting with one of our teams to get talk about your project.</p>
          </Card>
        </li>
        <li>
          <Card>
            <h3>Design&nbsp;&nbsp;&nbsp;<FaIcons.FaBezierCurve size='7em' /></h3>
            <p>After we accept your project, we will work with our teams to build a development plan.</p>
          </Card>
        </li>
        <li>
          <Card>
            <h3>Construct&nbsp;&nbsp;&nbsp;<FaIcons.FaLaptopCode size='7em' /></h3>
            <p>From there we will hand the project over to a development team to put it all together.</p>
          </Card>
        </li>
        <li>
          <Card>
            <h3>Depoloy&nbsp;&nbsp;&nbsp;<FaIcons.FaDolly size='7em' /></h3>
            <p>And then when the project is complete, we will give you the keys to your brand new platform.</p>
          </Card>
        </li>
      </ul>
    </CardWrapper>
  )
}
