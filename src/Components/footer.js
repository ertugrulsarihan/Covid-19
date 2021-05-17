import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a
            class="btn-floating pulse"
            href="https://github.com/ertugrulsarihan"
          >
            <AiFillGithub
              size="35px"
              style={{ margin: "auto", marginTop: "2px", marginLeft: "1px" }}
            />
          </a>
        </li>
        <li>
          <a
            class="btn-floating pulse"
            href="https://www.linkedin.com/in/ertu%C4%9Frul-sarihan-11bb55189/"
          >
            <FaLinkedinIn
              size="25px"
              style={{ margin: "auto", marginTop: "8px", marginLeft: "1px" }}
            />
          </a>
        </li>
      </ul>
      <h5> © 2021 Copyright Text</h5>
    </div>
  );
}
