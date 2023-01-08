import { useEffect, useState, React } from "react";
import NextMatches from "./NextMatches";
import RecentMatches from "./RecentMatches";
import { useSelector, useDispatch } from "react-redux";
import {
  Countries,
  DateAndLeague,
  previousMatches,
  saveChange,
} from "../../Reducers/MatchesReducer";
import "./matches.css";
import Spinner from "../generalComponents/spinner";
import { Link } from "react-router-dom";
import { Leagues } from "../../Reducers/MatchesReducer";
import { MDBBtn } from "mdb-react-ui-kit";

const Matches = () => {
  //dipatch all countries || read all countries===========================================================
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.matches.filterData);

  useEffect(() => {
    dispatch(Countries());
  }, []);
  //=====================================================================================================

  //set state to store the current country id and to dispatch the leagues depend on it=========================================
  const [currentCountryId, setCurrentCountryId] = useState("");
  function changeIdState(id) {
    setCurrentCountryId(id);
    document.getElementById("leagues").style.display = "inline";
    document.getElementById("date").style.display = "inline";
    document.getElementById("submit-btn").style.display = "inline";
  }
  useEffect(() => {
    dispatch(Leagues());
  }, [currentCountryId]);
  const allLeagues = useSelector((state) => state.matches.leagues);
  const filterdLeagues = allLeagues.filter(
    (e) => e.country_id == currentCountryId
  );
  //=============================================================================================================================

  // matches details ==========================================================================================

  // get today's date to set it as the default value of the from input
  let fromDate = new Date().toJSON().slice(0, 10);
  let getDate = new Date();
  let day = getDate.getDate() + 1;
  let month = getDate.getMonth() - 10;
  let year = getDate.getFullYear() + 1;

  let toDate = `${year}-${month}-${day}`;

  //this state is to store the start date and end data and the leauge id to "///     GET THE UPCOMING MATCHES      \\\"
  const [dateAndLeague, setDateAndLeague] = useState({
    from: fromDate,
    To: toDate,
    leagueId: "",
  });

  // this state is to store the 1- from: previous data  2- To: now date for the proevious component
  const nowDate = new Date();
  let nowDay = nowDate.getDate();
  let nowMonth = nowDate.getMonth() + 1;
  let nowYear = nowDate.getFullYear();

  let currentDate = `${nowYear}-${nowMonth}-${nowDay}`;
  let previousMonth = `${nowYear}-${nowMonth - 2}-${nowDay}`;
  console.log(previousMonth);

  // send the dat to the async fucniton as an object with the leauge id from the state
  const myObject = {
    current: currentDate,
    previous: previousMonth,
    id: dateAndLeague.leagueId,
  };

  // set the league id to the date and league state
  function handeLOnChange(e) {
    // myFunction();
    setDateAndLeague((prevs) => ({
      ...prevs,
      [e.target.name]: e.target.value,
    }));
    //dispath the fetch when the league selected
  }

  useEffect(() => {
    if (dateAndLeague.leagueId !== "") {
      dispatch(DateAndLeague(dateAndLeague));
      dispatch(previousMatches(myObject));
    }
  }, [dateAndLeague.leagueId]);

  // end matches details =======================================================================================

  const nextMatches = useSelector((state) => state.matches.dateAndLeague) || []; // get the next matches to send it to the next component
  const previouMatches =
    useSelector((state) => state.matches.previousMatches) || []; // get the previous matches to send it to the previous component

  //make new thunk and fetch the new api to get the previous matches for all leagues      and  new state

  if (Countries.length == 0) {
    return <Spinner />;
  }
  return (
    <>
      <section
        className="match-section set-bg"
        data-setbg="img/match/match-bg.jpg"
      >
        <div className="container">
          {previouMatches !== null ? (
            <h2 className="text-light mb-4">
              select a <span id="colorRed">city</span> and a{" "}
              <span id="colorRed">league</span> to see the results
            </h2>
          ) : (
            ""
          )}
          <div
            className="select-div d-flex align-items-center flex-wrap gap-2 "
            style={{ backgroundColor: "transparent" }}
          >
            <div className="dropdown">
              <MDBBtn
                onClick={() => myFunction()}
                className="dropbtn"
                color="dark"
                style={{ backgroundColor: "#751f4a" }}
              >
                Select City
              </MDBBtn>
              <div id="myDropdown" className="pointer dropdown-content ">
                <input
                  className="pointer"
                  type="text"
                  placeholder="Search.."
                  id="myInput"
                  onChange={(element) =>
                    dispatch(saveChange(element.target.value))
                  }
                />
                {allCountries.slice(2, 12)?.map((element) => {
                  return (
                    <div className="search">
                      <p onClick={() => changeIdState(element.country_id)}>
                        <img
                          width={"100px"}
                          height={"50px"}
                          src={element.country_logo}
                          alt=""
                        />
                        {element.country_name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-md-4 col">
              <select
                className="col-md-8 form-control"
                id="leagues"
                name="leagueId"
                onChange={handeLOnChange}
              >
                <option>--Select a league--</option>
                {filterdLeagues.map((league) => {
                  return (
                    <option value={league.league_id} onClick={myFunction}>
                      {league.league_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row mt-5">
            <RecentMatches previouMatches={previouMatches} />
            <NextMatches nextMatches={nextMatches} />
          </div>
        </div>
      </section>
    </>
  );

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function filterFunction() {
    let input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDropdown");
    a = div.querySelectorAll("div.search");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
};

export default Matches;
