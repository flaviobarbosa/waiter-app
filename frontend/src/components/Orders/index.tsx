import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6375de3dac098619417ced2c',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668617302863-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6375de3dac098619417ced2d'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668617974439-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6375de3dac098619417ced2e'
      }
    ],
  }
];

export function Orders() {

  return (
    <Container>
      <OrdersBoard
        icon="🕧"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );

}
