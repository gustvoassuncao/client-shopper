import { Button } from "@mui/material";
import React from "react";
import { ButtonStyles, ItemCartStyled, BorderLine } from "./ItemCardStyles";

const ItemCard = (props) => {
  return (
    <>
    <ItemCartStyled>
      <h5>{props.item.name}</h5>
      <p>R$: {props.item.price}</p>
      <ButtonStyles>
        <Button
          onClick={() => props.decreaseQty(props.item)}
          disabled={props.item.productQuantity === 1}
        >-</Button>
        <span>{props.item.productQuantity}</span>
        <Button
          onClick={() => props.increaseQty(props.item)}
          disabled={props.item.productQuantity === props.item.qty_stock}
        >+</Button>
        <Button onClick={() => props.removeFromCart(props.item)}>Remover</Button>
      </ButtonStyles>
    </ItemCartStyled>
    <BorderLine></BorderLine>
    </>
  );
}

export default ItemCard;