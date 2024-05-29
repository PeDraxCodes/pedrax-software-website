# PeDrax Software Website Repository

Below you will find instructions on how to set up and run the project, as well as how to use Tailwind CSS with the `npx` command.


## Running Tailwind CSS

This project uses Tailwind CSS v4 for styling. To generate the Tailwind CSS file, you can use the `npx` command as follows:

1. Ensure you have the `tailwindcss` package installed:
    ```sh
    npm install tailwindcss@next @tailwindcss/cli@next
    ```


4. Add the Tailwind directives to your CSS file (e.g., `src/styles/input.css`):
    ```css
    @import "tailwindcss";
    ```

5. Run the Tailwind CLI tool to process your CSS:
    ```sh
    npx @tailwindcss/cli@next -i src/styles/input.css -o src/styles/app.css --watch
    ```

   This will compile your Tailwind CSS and watch for changes, automatically rebuilding the CSS file.
