import React from 'react'
import './Table.css'

export default function Table(props) {
  const renderHeader = () => {
    return (
      <tr>
        <td>Title</td>
        <td>Upvotes</td>
        <td>Date</td>
      </tr>
    )
  }

  const renderBody = () => {
    return props.rows.map(row => {
      return (
        <tr>
          <td>{row.title}</td>
          <td>{row.upvotes}</td>
          <td>{row.date}</td>
        </tr>
      )
    })
  }

  return (
    <table className="article__details">
      {renderHeader()}
      {renderBody()}
    </table>
  )
}
