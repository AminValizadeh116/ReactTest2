import Categories from "../../components/categories/Categories";
import Comments from "../../components/comments/Comments";
import Container from "../../components/container/Container";
import Slogan from "../../components/slogan/Slogan";

function Home() {
  return (
    <div>
      <Container>
        <Slogan />
        <Categories />
        <Comments />
      </Container>
    </div>
  );
}

export default Home;
