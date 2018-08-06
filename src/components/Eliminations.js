import React from 'react'

import '../styles/eliminations.css';

export default (props) => {
  const {
    A, 
    B, 
    C, 
    D, 
    E, 
    F, 
    G, 
    H, 
    height1,
    height2,
    height3,
    height4,
    height5,
    height6,
    height7,
    height8,
    quarter1,
    quarter2,
    quarter3,
    quarter4,
    semi1,
    semi2,
    final
  } = props.qual;
  return (
    <div className="elim-container">
      <div className="heightfinals">
        <div className="height1">
          <span onClick={props.onClick}>{A[0]}</span>
          <span onClick={props.onClick}>{B[1]}</span>
        </div>
        <div className="height2">
          <span onClick={props.onClick}>{C[0]}</span>
          <span onClick={props.onClick}>{D[1]}</span>
        </div>
        <div className="height3">
          <span onClick={props.onClick}>{E[0]}</span>
          <span onClick={props.onClick}>{F[1]}</span>
        </div>
        <div className="height4">
          <span onClick={props.onClick}>{G[0]}</span>
          <span onClick={props.onClick}>{H[1]}</span>
        </div>
      </div>

      <div className="quarterfinals">
        <div className="quarter1">
          <span onClick={props.onClick}>{height1}</span>
          <span onClick={props.onClick}>{height2}</span>
        </div>
        <div className="quarter2">
          <span onClick={props.onClick}>{height3}</span>
          <span onClick={props.onClick}>{height4}</span>
        </div>
      </div>

      <div className="semifinals">
        <div className="semi1">
          <span onClick={props.onClick}>{quarter1}</span>
          <span onClick={props.onClick}>{quarter2}</span>
        </div>
      </div>

      <div className="finals">
        <div className="final1">
          <span onClick={props.onClick}>{semi1}</span>
          <span onClick={props.onClick}>{semi2}</span>
        </div>
      </div>

      <div className="semifinals">
        <div className="semi2">
          <span onClick={props.onClick}>{quarter3}</span>
          <span onClick={props.onClick}>{quarter4}</span>
        </div>
      </div>

      <div className="quarterfinals">
        <div className="quarter3">
          <span onClick={props.onClick}>{height5}</span>
          <span onClick={props.onClick}>{height6}</span>
        </div>
        <div className="quarter4">
          <span onClick={props.onClick}>{height7}</span>
          <span onClick={props.onClick}>{height8}</span>
        </div>
      </div>

      <div className="heightfinals">
        <div className="height5">
          <span onClick={props.onClick}>{B[0]}</span>
          <span onClick={props.onClick}>{A[1]}</span>
        </div>
        <div className="height6">
          <span onClick={props.onClick}>{D[0]}</span>
          <span onClick={props.onClick}>{C[1]}</span>
        </div>
        <div className="height7">
          <span onClick={props.onClick}>{F[0]}</span>
          <span onClick={props.onClick}>{E[1]}</span>
        </div>
        <div className="height8">
          <span onClick={props.onClick}>{H[0]}</span>
          <span onClick={props.onClick}>{G[1]}</span>
        </div>
      </div>
    </div>
  )

}
