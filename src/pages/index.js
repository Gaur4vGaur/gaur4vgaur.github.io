import React from "react"

// Components
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout title="Blog Starter" subtitle="Built with React and Gatsby">
        <div className="blog-container">
          <section>
            <div className="post-summary">
              <p>Feb 27th, 2021</p>
              <h2>Meaningful blog title</h2>
              <p>
                Cheese and wine rubber cheese airedale cottage cheese the big
                cheese stinking bishop cheesecake st. agur blue cheese. Cow
                rubber cheese cheese triangles say cheese cheese on toast
                cheddar red leicester swiss.{" "}
              </p>
              <button>Read more</button>
            </div>
            <div className="post-summary">
              <p>Feb 27th, 2021</p>
              <h2>Meaningful on toast babybel babybel</h2>
              <p>
                Pecorino fondue manchego who moved my cheese babybel hard cheese
                fromage roquefort. Roquefort port-salut cheeseburger cheese on
                toast jarlsberg red leicester chalk and cheese fromage.
              </p>
              <button>Read more</button>
            </div>
          </section>
          <aside>
            <p>Place holder for profile pic</p>
            <h3>Gaurav Gaur</h3>
            <p>
              Goat gouda who moved my cheese. Red leicester edam port-salut
              cream cheese pepper jack halloumi jarlsberg mozzarella. Boursin
              cheese strings manchego bocconcini croque monsieur cheese slices
              the big cheese fromage.
            </p>
          </aside>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex
