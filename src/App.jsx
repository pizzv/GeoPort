const products = [
  { id: 1, name: 'Hoodie', price: '$42' },
  { id: 2, name: 'T-shirt', price: '$24' },
  { id: 3, name: 'Sweats', price: '$34' },
  { id: 4, name: 'Beanie', price: '$18' },
  { id: 5, name: 'Baby set', price: '$46' },
  { id: 6, name: 'Jacket', price: '$52' }
];

function App() {
  return (
    <div className="app">
      <header className="navbar" id="home">
        <div className="logo">Teddies</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Comfortable streetwear for little legends</h1>
          <a href="#shop" className="shop-button">
            Shop Now
          </a>
        </section>

        <section className="products" id="shop">
          <h2>Shop Favorites</h2>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="image-placeholder">Image</div>
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button type="button">Add to cart</button>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>About Teddies</h2>
          <p>
            Teddies is a toddler streetwear brand focused on comfort, style,
            and everyday play.
          </p>
        </section>

        <section className="contact" id="contact">
          <h2>Join our email list</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
