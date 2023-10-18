import Doctor from "./doctor";

const Team = (props) => {
  return (
    <div>
      <section id="team" data-stellar-background-ratio="1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-info">
                <h2 className="wow fadeInUp" data-wow-delay="0.1s">
                  Our Doctors
                </h2>
              </div>
            </div>

            <div className="clearfix"></div>
            <Doctor></Doctor>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
