# Desafio Frontend JustTravel
implementar o frontend de uma loja de turismo.

API: [API](https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets)

Figma: [Protótipo](https://www.figma.com/file/BoztHDtjdxXbH1gMbij0Tf/Desafio-Just-Travel---Full-Stack?type=design&node-id=0-1&mode=design)

## Requisitos
[] - Implementar as telas propostas no protótipo do Figma
[] - Deve ser possível realizar uma busca por nome ou localização do ingresso
[] - Deve ser possível adicionar e remover ingressos do carrinho
[] - Deve ser possível fazer a paginação dos ingressos (6 por página)
[] - Utilizar a API para consumir os dados no frontend

## Informações importantes:
- Na página principal, você verá que existem vários filtros no menu lateral esquerdo, eles são apenas itens visuais e não será necessário implementar a sua funcionalidade
- Na página de detalhes do ingresso, você verá que existe informações sobre Data do ingresso, Ingressos, Ingresso Infantil e Ingresso Adulto, eles são apenas itens visuais e não será necessário implementar a sua funcionalidade

## Tecnologias:
- Reactjs
- Redux ou qualquer gerenciador de estado

### Bônus se:
- NextJs
- TypeScript
- Vitest e/ou React testing Library para criar testes
- Utilizar Storybook para documentação dos componentes

### Atentar: 
- Boas Práticas
- Código Limpo
- Testes de Qualidade
- Documentação

## API:
Todos ingressos: /tickets
Detalhes de um ingresso: /tickets/{ticketId}
Filtragem: /tickets?search=nome
Paginação: /tickets?page=1&limit=6

## Extra points (possible)
- [ ] Translation?
