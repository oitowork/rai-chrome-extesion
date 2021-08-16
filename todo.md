Descrição do Desafio

Crie uma extensão do Chrome que substitua todos os dólares americanos por RAI em todas as páginas que alguém visita.

Para simplificar, a extensão pode chamar o [subgráfico RAI]([https://docs.reflexer.finance/api/api-endpoints](https://docs.reflexer.finance/api/api-endpoints) e obter o último preço de resgate, após o qual pode transformar valores em dólares em RAI dividindo os valores em dólares pelo preço de resgate.

Funcionalidade de exemplo

Suponha que o preço de resgate atual seja de 4 USD. A extensão deve ser capaz de detectar e substituir instâncias como "$ 1000", "1000 USD" e "1000 US Dollar" para "250 RAI" em cada página que eu visitar.

Requisitos de envio

Seu código deve ser de código aberto sob a licença do MIT. Você também deve publicar a extensão na Chrome Web Store.