import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import Button from '../ui/Button';


function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const [buttonLabel, setButtonLabel] = useState("Add to Cart");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToCart(newItem));
    setButtonLabel("Added");
    setIsButtonDisabled(true);
  }

  return (
    <li className="menu-item">
      <img
        src={imageUrl}
        alt={name}
        className={soldOut ? 'sold-out' : ''}
        style={{ borderRadius: 8 }}
      />
      <div className="content">
        <p className="name">{name}</p>
        <p className="ingredients">{ingredients.join(', ')}</p>
        <div className="footer">
          {!soldOut ? (
            <p className="price">{unitPrice}</p>
          ) : (
            <p className="sold-out">Sold out</p>
          )}

          {!soldOut && (
            <Button
              label={buttonLabel}
              className="button"
              type="small"
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
            />
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
