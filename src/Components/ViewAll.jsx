import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [userInfo, changeUserInfo] = useState({
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [],
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    },
  });

  const fetchData = () => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      changeUserInfo(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {userInfo.data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex allign-items-stretch">
                    <div class="card">
                      <img src={value.avatar} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h6 class="card-title">{value.id}</h6>
                        <h5 class="card-title">
                          First Name: {value.first_name}
                        </h5>
                        <h5 class="card-title">Last Name: {value.last_name}</h5>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">{value.email}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
