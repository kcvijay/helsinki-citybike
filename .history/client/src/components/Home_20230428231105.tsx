import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="hero-txt text-xl leading-8 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem laborum
        nobis assumenda ipsa eum. Mollitia nemo quasi voluptate nulla obcaecati
        libero incidunt adipisci, officia voluptatum delectus rem unde tenetur
        optio sit placeat labore molestiae architecto quo aliquid. Asperiores
        voluptates illo autem eum necessitatibus rerum ad quam nesciunt
        doloremque quidem corporis possimus tempore sit nulla perspiciatis
        dolorum quisquam totam optio, blanditiis cum sunt provident. Minima quas
        animi fugiat rem recusandae in dolorem libero officia quisquam saepe
        impedit voluptates error laborum blanditiis voluptatem at, repellat fuga
        provident? Corrupti illum obcaecati ipsum quis ratione deserunt quas
        culpa voluptate commodi, excepturi beatae rem perferendis?
      </div>
      <Link className="btn-primary" to="/all-journeys">
        Browse all journeys
      </Link>
    </div>
  );
};

export default Home;
