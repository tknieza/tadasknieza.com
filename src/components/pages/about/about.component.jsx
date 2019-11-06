import React from "react";

import { Footer } from "../../footer/footer.component";

export const About = () => (
  <div>
    <div className="section">
      <h1>Me</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
        laboriosam dolorem voluptates delectus asperiores mollitia? Voluptatibus
        tenetur adipisci perferendis eos officia reprehenderit reiciendis, nemo
        fugiat, laudantium minima aperiam numquam accusantium.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        ducimus placeat soluta odio nobis error.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in
        consectetur sed, hic iusto deleniti blanditiis id commodi illo alias,
        numquam quod modi! Tempora, aspernatur.
      </p>

      <h3>Around the Web</h3>

      <ul>
        <li>
          Email:{" "}
          <a href="mailto:tadasknieza@gmail.com">tadasknieza@gmail.com</a>{" "}
        </li>
        <li>
          Github: <a href="https://github.com/tknieza">tknieza</a>{" "}
        </li>
        <li>
          Twitter: <a href="https://twitter.com/tknieza">tadasknieza</a>
        </li>
      </ul>

      <h1>Music</h1>
      <p>
        I like to record/produce music in my spare time. Here are some tracks.
      </p>
      <ul>
        <li>
          <a href="https://soundcloud.com/">Song 1</a>
        </li>
        <li>
          <a href="https://soundcloud.com/">Song 2</a>
        </li>
        <li>
          <a href="https://soundcloud.com/">Song 3</a>
        </li>
        <li>
          <a href="https://soundcloud.com/">Song 4</a>
        </li>
      </ul>

      <h1>Currently Using</h1>

      <ul>
        <li>Computer: ASUS Zenbook UX430UQ</li>
        <li>
          Code Theme:{" "}
          <a href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme">
            One Dark Pro
          </a>
        </li>
        <li>
          Notes:{" "}
          <a href="https://products.office.com/en-gb/onenote/digital-note-taking-app">
            Microsoft OneNote
          </a>
        </li>
        <li>
          Editor/IDE:{" "}
          <a href="https://code.visualstudio.com/">Visual Studio Code</a>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
);
