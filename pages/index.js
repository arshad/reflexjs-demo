// https://github.com/reflexjs/reflex
// Reflexjs allows you to style your component using style props.
// Using style props you style a component by passing props to it.

// Every css property is available as style props. This means you
// can get started without a learning curve.

// In addition to that, Reflexjs adds a few aliases such as `p` for
// padding, `size` for `width` and `height` for convenience.

export default function IndexPage() {
  // This div has padding: 10px, margin-left: auto and margin-right: auto.
  return (
    <div padding="10" mx="auto" maxW="800px">
      {/* This is a heading with inline styles. */}
      <h1 fontSize="50px" fontWeight="bold">
        This is a heading
      </h1>

      {/* This paragraph is using values (or tokens) from a theme */}
      {/* See `theme.js`. */}
      <p fontSize="xl" fontWeight="hairline" mb="10">
        This is a paragraph.
      </p>

      {/* A button with inline styles */}
      <button
        d="flex"
        px="10"
        py="2"
        bg="primary"
        color="white"
        rounded="5"
        mr="3"
      >
        A button
      </button>

      {/* Use variant to extract styles to your theme.js */}
      {/* This is handy for re-usable styles */}
      {/* Take a look at button -> primary in theme.js */}
      <button variant="button.primary">Primary</button>

      {/* Variants can be composed. */}
      <button variant="button.primary.lg" ml="3">
        Large button
      </button>
      <button variant="button.secondary.sm" mx="3">
        Small
      </button>

      {/* You can combine multiple variants together. */}
      <button variant="button.primary text.caps">Button</button>

      {/* Responsive styles is really easy as well. */}
      {/* Use a `|` to create mobile first responsive styles */}
      {/* This div is 300x300px on mobile and 600x600px on large devices */}
      {/* It has a background-color of purple on mobile, aquamarine on tablet and tomato on desktop. */}
      <div
        size="300|600"
        display="flex"
        alignItems="center"
        justifyContent="center"
        m="10"
        bg="purple|aquamarine|tomato"
      >
        Responsive
      </div>
    </div>
  )
}
