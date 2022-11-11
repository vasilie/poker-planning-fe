import Header from "./Header";
import Modal from "./modal/Modal";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Modal />
      <main>{children}</main>
    </>
  )
}