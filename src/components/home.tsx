const Home = () => {
  return (
    // max-w-{breakpoint} is not supported in warp yet
    <section className="max-w-300 py-32 text-m">
        <p>This project aims to compare Fabric and Warp, in order to assess their coexistence and ensure that the design and functionality remain consistent. By running this project, you can test and evaluate how these two design systems work together.</p>
        
        <p>You can:</p>
        <ol>
          <li>
            1) Compare Fabric/Warp React components side by side
          </li>
          <li>
            2) Test some Fabric/Warp css classes
          </li>
          <li>
            3) Check how the resets affects basic html-tags
          </li>
        </ol>
        <p>
          The goal is that the components look identical, regardless of the order of the stylesheet imports in index.html
        </p>
    </section>
  )
};

export default Home;