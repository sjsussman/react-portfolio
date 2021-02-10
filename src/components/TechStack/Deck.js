import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./Deck.css";

import {
  ReactJs,
  NodeDotJs,
  Javascript,
  Html5,
  Netlify,
  Amazonaws,
} from "@icons-pack/react-simple-icons";

const stackcards = [
  {
    key: 1,
    componentCard: <ReactJs color="#61DAFB" size={48} />,
    title: "React",
    description:
      "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    key: 2,
    componentCard: <Netlify color="#00C7B7" size={48} />,
    title: "Netlify",
    description:
      "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites.",
  },
  {
    key: 3,
    componentCard: <NodeDotJs color="#339933" size={48} />,
    title: "Node.js",
    description:
      "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. ",
  },
  {
    key: 4,
    componentCard: <Javascript color="#F7DF1E" size={48} />,
    title: "JavaScript",
    description:
      "JavaScript often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification.",
  },
  {
    key: 5,
    componentCard: <Html5 color="#E34F26" size={48} />,
    title: "HTML5",
    description:
      "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.",
  },
  {
    key: 6,
    componentCard: <Amazonaws size={48} />,
    title: "Amazon AWS",
    description:
      "Amazonaws (or Amazon Web Services) is a online cloud storage web service presented by Amazon, Inc. It provides computing power, database storage, applications and other IT resources.",
  },
];

const Card = ({ stackcard }) => {
  const { title, description, componentCard } = stackcard;
  return (
    <div>
      <div>{componentCard}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(0deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const CardDeck = () => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(stackcards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === stackcards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  const index = stackcards.length - 1;
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
      id="deckroot1"
    >
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div
        {...bind(i)}
        style={{ transform: interpolate([rot, scale], trans) }}
        id="deckroot2"
      >
        <Card stackcard={stackcards[index - i]} />
      </animated.div>
    </animated.div>
  ));
};

const exportedDeck = () => {
  return (
    <div id="deckroot3">
      <div id="deckroot4">
        <CardDeck />
      </div>
    </div>
  );
};

export default exportedDeck;
