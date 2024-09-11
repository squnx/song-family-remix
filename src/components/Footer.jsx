
const Footer = () => {
  return (
    // <footer id="footer" className="footer">
    //   <p>&copy; 2024 Your Company</p>
    // </footer>

    <footer id="footer" className="footer coffee-background">
      <div className="container">
        <div className="copyright text-center ">
          <p><span>Copyright</span> © 2023–{(new Date().getFullYear())} ::<a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong className="px-1 sitename">mousewurx</strong></a>:: <span>All Rights Reserved</span></p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href=""><i className="bi bi-twitter-x"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/ivansong/" title="LinkedIn" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>
        {/* <div className="credits">
          Designed by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer">mousewurx</a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer