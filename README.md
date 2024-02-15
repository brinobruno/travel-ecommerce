# Desafio Frontend JustTravel
A travelling e-commerce app.

![Cover](https://github.com/brinobruno/travel-ecommerce/assets/81701584/fb4c77f2-36f8-4114-9a3a-bb3dbe5ab26b)

## Results
[App deploy](https://travel-ecommerce-v1.vercel.app/)

[Storybook deploy](https://travel-ecommerce-storybook.vercel.app)

## External tools
[Tickets API](https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets)

[Currency API](https://open.er-api.com/v6/latest/USD)

[Figma Prototype](https://www.figma.com/file/BoztHDtjdxXbH1gMbij0Tf/Desafio-Just-Travel---Full-Stack?type=design&node-id=0-1&mode=design)

### Requirements
- Node ^20.11.0

### Tech Stack
- [Next.js 13](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Styled-components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Coverage
- Unit Test with Vitest and React Testing Library
- Vercel CI/CD

## Environment variables (.env)
Provided at .env.example

`NEXT_PUBLIC_API_URL`

`NEXT_PUBLIC_CURRENCY_API`

## Installation
Add a .env file with .env.example contents

```bash
cd <example-project-name>
pnpm install
cp .env.example .env
pnpm dev
```

### Get started (dev server)
```bash
pnpm dev
```

### Running tests
(At console)
```bash
pnpm test
```

(At client)
```bash
pnpm test:ui
```

### Running Storybook
```bash
pnpm storybook
```

## Challenge proposed
[X] - Implementar as telas propostas no protótipo do Figma

[X] - Deve ser possível realizar uma busca por nome ou localização do ingresso

[X] - Deve ser possível adicionar e remover ingressos do carrinho

[X] - Deve ser possível fazer a paginação dos ingressos (6 por página)

[X] - Utilizar a API para consumir os dados no frontend

### External Ticket API Endpoints
- All tickets: /tickets
- Ticket details: /tickets/{ticketId}
- Filtering: /tickets?search=nome
- Pagination: /tickets?page=1&limit=6

## Workflow
### Some context...(For evaluation)
For better results, decided to make paginated requests, in an ideal situation, api should return total amount of tickets registered, and on each request, also return total amount of tickets fetched on the request itself.

The API in question doesn't do it, if it did, pagination would work as expected for search results, to simulate this ideal situation, I search for all tickets to get the array length - I'd like to make it clear it's for a simulation - clearly fetching through all the tickets and then paginated tickets as well is far from ideal.

Also, I decided to use Styled-components instead of tailwind or just plain scss, and as of today, CSS-in-JS is not yet supported by Next.js.

If I didn't go with Styled-components, I would use Server Side Data Fetching, and render as Server components.

### Paginating tickets:
- All tickets displays are paginated, from home, paginated home and search results.
- User can click on page numbers and prev/next controls to navigate through ticket results.

### Searching tickets:
- User types a query such as ticket name or location in search bar.
- When enter or search button is pressed, client sends a request to api for paginated results with search param.
- Returns paginated, filtered results.
- Displays search results on client-side through map.
- User gets pagination items to navigate through at the bottom of the ticket list display.

### Ticket details
- User clicks for more details on ticket list.
- Client sends a request to api with ticket id for /ticket/{id}.
- Returns ticket id data.
- Displays ticket details.

### (Cart) Adding and removing items
- User clicks on add ticket to cart.
- Saves ticket (all data), quantity and subtotal on redux state - as well as localStorage.
- Display a toast to user, updates cart count number, and displays data on Cart Drawer when user clicks to open it.
- User can also remove tickets - which removes from state and localStorage by id.

## Testing (Vitest) and documentation (Storybook)
I'd like to express I didn't have much time to work on this project due to some personal challenges I had to face recently.

I'd like to reiterate how important and vital I believe component documentation and testing are to the success of an application. If I had more time, I'd would've almost all of the components and also unit testing.

Having said that, to cope with my lack of time whilst demonstrating my capacity for documenting and testing, I left 2 cases for each.

I've demonstrated both setup and implementation of these concepts.

<strong>Testing</strong>

@/components/Button/Button.spec.tsx

<strong>Documentation</strong>

@/components/Button/Button.stories.tsx

