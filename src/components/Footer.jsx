import FooterStyle from "../scss/footer.module.scss"

const Footer = () => {
  return (
    <div className={FooterStyle["footer"]}>
    <p>Copyright by Clarusway {new Date().getFullYear()}</p> 
    </div>
  )
}

export default Footer
