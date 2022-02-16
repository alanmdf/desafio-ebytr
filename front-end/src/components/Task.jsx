/* eslint-disable react/prop-types */
import React from 'react';

function Task({ taskInfo }) {
  const {
    _id: id, name, createdAt, updatedAt, status,
  } = taskInfo;
  return (
    <div>
      <span>{id}</span>
      <span>{name}</span>
      <span>{createdAt}</span>
      <span>{updatedAt}</span>
      <span>{status}</span>
    </div>
  );
}

export default Task;
