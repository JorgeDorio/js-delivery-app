## Rota `/pedidos`

#### 1. Enviar pedido
POST `/pedidos`

body:

~~~
{
	"id": 5,
	"user_id": 3,
	"seller_id": 2,
	"total_price": "72.00",
	"delivery_address": "Rua Vila Bela,  Bairro Gurupi, 670",
	"delivery_number": "0003",
	"sale_date": "2022-11-22T00:00:00.000Z",
	"status": "PREPARANDO"
}
~~~

#### 2. Receber todos os pedidos de qualquer cliente
GET `/pedidos`
Role: Seller

#### 3. Receber todos os pedidos de um cliente especifico
GET `/pedidos/c/:id(id do cliente)`

#### 4. Receber pedido especifico
GET `/pedidos/:id`

Retorna o pedido correspondente ao ID passado

#### 5. Atualizar pedido completo
PUT `/pedidos/:id`

body:
~~~
{
	"id": 5,
	"user_id": 3,
	"seller_id": 2,
	"total_price": "72.00",
	"delivery_address": "Rua Vila Bela,  Bairro Gurupi, 670",
	"delivery_number": "0003",
	"sale_date": "2022-11-22T00:00:00.000Z",
	"status": "PREPARANDO"
}
~~~

#### 6. Atualizar status do pedido
PATCH `/pedidos/:id`

body:
~~~
{
    "status": "ENTREGUE"
}
~~~
