import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mt-2 mb-4 font-medium text-green-500">
        Create Post Baru
      </h1>
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
