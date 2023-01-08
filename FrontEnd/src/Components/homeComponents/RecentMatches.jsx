const RecentMatches = ({ previouMatches }) => {
  // console.log(previouMatches);
  let previousmatch = previouMatches?.slice(0, 3);

  // console.log(previousmatch);

  return (
    <>
      <div className="col-lg-6">
        <div className="ms-content">
          <h4>Recent Results</h4>
          <div className="mc-table">
            <table>
              <tbody>
                {previousmatch ? (
                  previousmatch.map((match) => {
                    return (
                      <>
                        <tr
                          key={match.match_id}
                          style={{ backgroundColor: "#751f4a78" }}
                        >
                          <td className="left-team ">
                            <img src={match.team_home_badge} alt="" />
                            <h6>{match.match_hometeam_name}</h6>
                          </td>
                          <td className="mt-content">
                            {/* <div className="mc-op">
                              {match.match_hometeam_name} Vs{" "}
                              {match.match_awayteam_name}
                            </div> */}
                            <h4>
                              {match.match_hometeam_score} :{" "}
                              {match.match_awayteam_score}
                            </h4>
                            <div className="mc-op">{match.match_date}</div>
                          </td>
                          <td className="right-team">
                            <img src={match.team_away_badge} alt="" />
                            <h6>{match.match_awayteam_name}</h6>
                          </td>
                        </tr>
                        <hr className="text-dark" />
                      </>
                    );
                  })
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecentMatches;
