import { Link } from "react-router-dom";
import "./matches.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getExpectation } from "../../Reducers/ExpectationReducer";
import { useJquery } from "../../hooks/useJquery";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { logDOM } from "@testing-library/react";
import { useAuthUser } from "react-auth-kit";
import { ImArrowUpRight2 } from "react-icons/im";
import Expextation from "../populareComponents/Expextation";
import Swal from "sweetalert2";
const Popular = () => {
  const auth = useAuthUser();
  const { reloadJquery } = useJquery();

  const [expectationData, setExpectationData] = useState({
    team_1: 0,
    team_2: 0,
    expectation_id: 0,
    user_id: 0,
  });

  const dispatch = useDispatch();
  const expectations = useSelector(
    (state) => state.expectationData.articlesData
  );

  useEffect(() => {
    dispatch(getExpectation());
  }, []);

  useEffect(() => {
    reloadJquery();
  });

  function handeLOnChange(e) {
    setExpectationData(() => ({
      ...expectationData,
      [e.target.name]: e.target.value,
    }));
  }

  function handelOnSubmit(id) {
    const config = {
      method: "post",
      url: "http://localhost:8000/api/addUserExpectation",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        expect: `${expectationData.team_1}-${expectationData.team_2}`,
        expectation_id: id,
        user_id: auth().user.user_id,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  }
  return (
    <>
      {/* start popular section */}
      <section className="popular-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h3>
                  Expectation <span>Post</span>
                </h3>
              </div>
              <div className="row d-flex mb-4 ">
                {expectations?.slice(1)?.map((expectation) => {
                  return (
                    <Expextation
                      handeLOnChange={handeLOnChange}
                      handelOnSubmit={handelOnSubmit}
                      expectation={expectation}
                    />
                  );
                })}
              </div>
            </div>

            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
      {/* end popular seciton */}
    </>
  );
};
export default Popular;
