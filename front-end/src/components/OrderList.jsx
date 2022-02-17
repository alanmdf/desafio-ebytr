/* eslint-disable react/prop-types */
import React from 'react';

function OrderList(props) {
  const { handleChange } = props;
  const { orderInfo: { orderType } } = props;
  return (
    <form className="new-task-form">
      <label htmlFor="orderBy">
        Ordenar por:
        <select name="orderBy" id="order" onClick={(e) => handleChange(e)} onChange={handleChange}>
          <option value="name">Nome</option>
          <option value="createdAt">Data de criação</option>
          <option value="status">Status</option>
        </select>
      </label>
      <label htmlFor="asc">
        Ascendente
        <input
          type="radio"
          name="orderType"
          value="asc"
          id="asc"
          onChange={handleChange}
          checked={orderType === 'asc'}
        />
      </label>
      <label htmlFor="desc">
        Descendente
        <input
          type="radio"
          name="orderType"
          value="desc"
          id="desc"
          onChange={handleChange}
          checked={orderType === 'desc'}
        />
      </label>
    </form>
  );
}

export default OrderList;
