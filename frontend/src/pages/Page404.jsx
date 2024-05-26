import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center my-5">
            <h1 className="display-4">404</h1>
            <p className="lead">Sorry, we couldn't find the page you were looking for.</p>
            <Link to="/" className="btn btn-primary">Go back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;