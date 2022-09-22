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
    "user_id": 3,
    "seller_id": 2,
    "total_price": 10.00,
    "delivery_address": "Rua Irmãos Monteiro, Bairo Pedras, 851",
    "delivery_number": "0001",
    "sale_date": "2022-11-22T00:00:00.000Z",
    "status": "PENDENTE"
  },
  {
    "user_id": 3,
    "seller_id": 2,
    "total_price": 30.00,
    "delivery_address": "Rua Rua Sessenta e Dois, Bairro Maranguape II, 533",
    "delivery_number": "0002",
    "sale_date": "2022-11-22T00:00:00.000Z",
    "status": "ENTREGUE"
  },
  {
    "user_id": 3,
    "seller_id": 2,
    "total_price": 72.00,
    "delivery_address": "Rua Vila Bela,  Bairro Gurupi, 670",
    "delivery_number": "0003",
    "sale_date": "2022-11-22T00:00:00.000Z",
    "status": "PREPARANDO"
  }
]

module.exports = { pedido, arrPedidos }
