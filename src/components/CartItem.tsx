import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../store/CartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, allProducts } = useShoppingCart()
  const item = allProducts.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        alt={item.title}
        style={{ maxWidth: "100px", maxHeight: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.id*10)}
        </div>
      </div>
      <div> {formatCurrency(item.id*10 * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}