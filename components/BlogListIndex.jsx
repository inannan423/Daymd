function BlogBack() {
  return (
    <div
      className="z-10 w-screen h-96 "
      style={{
        backgroundImage: "url(https://api.maho.cc/random-img/pc.php)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

function BlogList() {
  return (
    <div className="my-2">
      <div
        style={{ backgroundImage: "url(https://placeimg.com/400/225/arch)" }}
        class="bg-no-repeat bg-cover card h-42 w-full bg-base-100 shadow-xl image-full"
      >
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
}

export function BlogListIndex() {
  return (
    <div>
      <BlogBack />
      <div className="mx-10 my-5 grid  gap-4 grid-cols-2">
        <div>
          <BlogList />
          <BlogList />
          <BlogList />
        </div>
        <div>
          <BlogList />
        </div>
      </div>
    </div>
  );
}
