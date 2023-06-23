const Home = () => {
  return (
    // max-w-{breakpoint} is not supported in warp yet
    <p className="max-w-300 py-32 text-m">
        This project aims to compare Fabric and Warp, in order to assess their coexistence and ensure that the design and functionality remain consistent. By running this project, you can test and evaluate how these two design systems work together. The goal is that the components look identical, regardless of the order of the stylesheet imports.
    </p>
  )
};

export default Home;