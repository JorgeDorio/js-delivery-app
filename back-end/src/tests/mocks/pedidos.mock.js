const pedido = {
  "user_id": 3,
  "seller_id": 2,
  "total_price": 10.00,
  "delivery_address": "Rua Irmãos Monteiro, Bairo Pedras, 851",
  "delivery_number": "0001",
  "sale_date": "2022-11-22T00:00:00.000Z",
  "status": "PENDENTE"
}

const arrPedidos = [
  {
    "id": 1,
    "userId": 3,
    "sellerId": 2,
    "totalPrice": "23.80",
    "saleDate": "2022-11-22T00:00:00.000Z",
    "deliveryAddress": "Rua Irmãos Monteiro, Bairo Pedras",
    "deliveryNumber": "851"
  },
  {
    "id": 2,
    "userId": 3,
    "sellerId": 2,
    "totalPrice": "14.20",
    "saleDate": "2022-11-21T00:00:00.000Z",
    "deliveryAddress": "Rua Vila Bela,  Bairro Gurupi",
    "deliveryNumber": "67"
  },
  {
    "id": 3,
    "userId": 3,
    "sellerId": 2,
    "totalPrice": "28.46",
    "saleDate": "2022-11-17T00:00:00.000Z",
    "deliveryAddress": "Rua Rua Sessenta e Dois, Bairro Maranguape II",
    "deliveryNumber": "533"
  }
]
module.exports = { pedido, arrPedidos }
