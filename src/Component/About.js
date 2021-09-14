import React from "react";

function About(props) {
  return (
    <>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.title}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolorem ab porro natus molestias placeat modi. Illo assumenda temporibus, minus mollitia nisi exercitationem sint iure aliquid iusto fuga eveniet tenetur ab ipsa accusamus quod. Deleniti corporis nihil dignissimos saepe rem, at maxime tempore a dolores ad cumque soluta ex iure.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolorem ab porro natus molestias placeat modi. Illo assumenda temporibus, minus mollitia nisi exercitationem sint iure aliquid iusto fuga eveniet tenetur ab ipsa accusamus quod. Deleniti corporis nihil dignissimos saepe rem, at maxime tempore a dolores ad cumque soluta ex iure.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolorem ab porro natus molestias placeat modi. Illo assumenda temporibus, minus mollitia nisi exercitationem sint iure aliquid iusto fuga eveniet tenetur ab ipsa accusamus quod. Deleniti corporis nihil dignissimos saepe rem, at maxime tempore a dolores ad cumque soluta ex iure.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolorem ab porro natus molestias placeat modi. Illo assumenda temporibus, minus mollitia nisi exercitationem sint iure aliquid iusto fuga eveniet tenetur ab ipsa accusamus quod. Deleniti corporis nihil dignissimos saepe rem, at maxime tempore a dolores ad cumque soluta ex iure.</p>
      </div>
    </>
  );
}

export default About;
