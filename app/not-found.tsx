import Link from "next/link"

const NotFound = () => (
  <section className="container-lg text-center">
    <h1>SORRY THIS PAGE DOES NOT EXIST</h1>
    <span className="text-4xl">
      Go back to{" "}
      <Link href="/" style={{ color: "var(--color-primary) " }}>
        Home
      </Link>
    </span>
  </section>
)

export default NotFound
