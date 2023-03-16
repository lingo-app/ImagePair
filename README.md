 This is a demo project for the [Lingo API](https://developer.lingoapp.com).

## Live demo

You can view the live demo at [https://image-pair.lingoapp.com](https://image-pair.lingoapp.com).

Select a character and an object the click save. The result will then be uploaded to Lingo. You can view all of the results in Lingo [here](https://lingo.lingoapp.com/s/oAgp6E/?v=0)

## How it works

This project uses [NextJS](https://nextjs.org) and server side rendering. SSR allows us to fetch data from Lingo on the server, keeping our API key private.

The `page.tsx` component fetches "characters" and "objects" from two sections in Lingo then passes that data to our client side components.

The frontend allows the user to select a character and object. To save the image we pass the selected asset IDs to a simple API which composes the two images next to eachother and saves the result to another section in Lingo. Again, this happens on the server so we can interact with Lingo without making our API key publicly available in the frontend code.

The save endpoint makes use of lingo export options to fetch the SVG assets as PNGs at the desired size.

## Running locally

1. Clone this repo
2. Run `yarn` to install packages
3. Create a `.env.local` file and enter your space id and api key (see below)
3. Run `yarn dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) with your browser


The `.env.local` file should look like this
```bash
LINGO_SPACE_ID="123"
LINGO_API_KEY="<my-api-key>"
```

## Hosting
We host this demo project using AWS Amplify though you could host it anyway you want. Instead of using SSR you could also fetch all the data via a simple API with endpoints to fetch the data.